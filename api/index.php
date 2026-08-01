<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

function respond(array $data, int $status = 200): never { http_response_code($status); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }
function body(): array { $data = json_decode(file_get_contents('php://input'), true); return is_array($data) ? $data : $_POST; }
function requireFields(array $data, array $fields): void { foreach ($fields as $field) if (!isset($data[$field]) || trim((string)$data[$field]) === '') respond(['ok'=>false,'error'=>"$field is required"], 422); }
function b64url(string $value): string { return rtrim(strtr(base64_encode($value), '+/', '-_'), '='); }
function token(array $user): string { $head=b64url(json_encode(['alg'=>'HS256','typ'=>'JWT'])); $payload=b64url(json_encode(['sub'=>(int)$user['id'],'role'=>$user['role'],'exp'=>time()+3600])); return "$head.$payload." . b64url(hash_hmac('sha256', "$head.$payload", JWT_SECRET, true)); }
function user(): array {
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (!preg_match('/^Bearer\s+(.+)$/', $header, $m)) respond(['ok'=>false,'error'=>'Authentication required'],401);
    [$h,$p,$sig] = array_pad(explode('.', $m[1]), 3, '');
    $expected=b64url(hash_hmac('sha256', "$h.$p", JWT_SECRET, true));
    $payload=json_decode(base64_decode(strtr($p,'-_','+/')),true);
    if (!$payload || !hash_equals($expected,$sig) || ($payload['exp'] ?? 0)<time()) respond(['ok'=>false,'error'=>'Invalid or expired token'],401);
    $stmt=db()->prepare('SELECT id,full_name,mobile,role FROM users WHERE id=?'); $stmt->execute([$payload['sub']]); $found=$stmt->fetch();
    if (!$found) respond(['ok'=>false,'error'=>'User not found'],401); return $found;
}
function only(array $roles): array { $u=user(); if (!in_array($u['role'],$roles,true)) respond(['ok'=>false,'error'=>'Not authorized'],403); return $u; }
function tracking(): string { return 'SN-' . date('Y') . '-' . strtoupper(bin2hex(random_bytes(4))); }

try {
    $route = trim($_GET['route'] ?? 'health', '/'); $method=$_SERVER['REQUEST_METHOD']; $pdo=db();
    if ($route==='health' && $method==='GET') respond(['ok'=>true,'service'=>'Surakshya Nepal PHP API','time'=>gmdate('c')]);

    if ($route==='auth/register' && $method==='POST') {
        $d=body(); requireFields($d,['full_name','mobile','password']);
        if (!preg_match('/^9\d{9}$/',$d['mobile']) || strlen($d['password'])<8) respond(['ok'=>false,'error'=>'Use a valid 10-digit Nepali mobile and 8+ character password'],422);
        $stmt=$pdo->prepare('INSERT INTO users(full_name,mobile,password_hash,role,district,municipality) VALUES(?,?,?,?,?,?)');
        $stmt->execute([$d['full_name'],$d['mobile'],password_hash($d['password'],PASSWORD_DEFAULT),'citizen',$d['district']??null,$d['municipality']??null]);
        $u=['id'=>(int)$pdo->lastInsertId(),'role'=>'citizen']; respond(['ok'=>true,'token'=>token($u),'user'=>['id'=>$u['id'],'name'=>$d['full_name'],'role'=>'citizen']],201);
    }
    if ($route==='auth/login' && $method==='POST') {
        $d=body(); requireFields($d,['mobile','password']); $q=$pdo->prepare('SELECT * FROM users WHERE mobile=?'); $q->execute([$d['mobile']]); $u=$q->fetch();
        if (!$u || !password_verify($d['password'],$u['password_hash'])) respond(['ok'=>false,'error'=>'Incorrect mobile or password'],401);
        respond(['ok'=>true,'token'=>token($u),'user'=>['id'=>(int)$u['id'],'name'=>$u['full_name'],'role'=>$u['role']]]);
    }
    if ($route==='hospitals' && $method==='GET') {
        $where=[];$params=[]; foreach(['province','district','municipality','type'] as $f) if (!empty($_GET[$f])) {$where[]="h.$f=?";$params[]=$_GET[$f];}
        if (!empty($_GET['specialization'])) {$where[]='EXISTS(SELECT 1 FROM doctors d WHERE d.hospital_id=h.id AND d.specialization=? AND d.status="Available")';$params[]=$_GET['specialization'];}
        if (!empty($_GET['q'])) {$where[]='(h.name LIKE ? OR h.district LIKE ? OR h.municipality LIKE ? OR EXISTS(SELECT 1 FROM doctors d WHERE d.hospital_id=h.id AND d.full_name LIKE ?))'; for($i=0;$i<4;$i++)$params[]='%'.$_GET['q'].'%';}
        $sql='SELECT h.*,s.total_beds,s.beds_available,s.icu_available,s.emergency_available,s.ambulances_available,s.blood_bank,s.waiting_minutes,s.emergency_status,s.updated_at FROM hospitals h JOIN hospital_status s ON s.hospital_id=h.id'.($where?' WHERE '.implode(' AND ',$where):'').' ORDER BY h.name';
        $q=$pdo->prepare($sql);$q->execute($params);respond(['ok'=>true,'data'=>$q->fetchAll()]);
    }
    if (preg_match('#^hospitals/(\d+)/doctors$#',$route,$m) && $method==='GET') {
        $q=$pdo->prepare('SELECT id,full_name,degree,department,specialization,experience_years,languages,opd_time,consultation_time,room_number,available_today,status FROM doctors WHERE hospital_id=? ORDER BY full_name');$q->execute([$m[1]]);respond(['ok'=>true,'data'=>$q->fetchAll()]);
    }
    if (preg_match('#^hospitals/(\d+)/status$#',$route,$m) && $method==='PATCH') {
        only(['hospital_admin','admin']);$d=body(); requireFields($d,['total_beds','beds_available','icu_available','emergency_available','ambulances_available','blood_bank','waiting_minutes','emergency_status']);
        $q=$pdo->prepare('UPDATE hospital_status SET total_beds=?,beds_available=?,icu_available=?,emergency_available=?,ambulances_available=?,blood_bank=?,waiting_minutes=?,emergency_status=?,updated_at=NOW() WHERE hospital_id=?');$q->execute([$d['total_beds'],$d['beds_available'],$d['icu_available'],$d['emergency_available'],$d['ambulances_available'],$d['blood_bank'],$d['waiting_minutes'],$d['emergency_status'],$m[1]]);respond(['ok'=>true,'message'=>'Live status updated']);
    }
    if ($route==='reports' && $method==='POST') {
        $u=user();$d=body();requireFields($d,['category','title','description','priority']);$id=tracking();$q=$pdo->prepare('INSERT INTO reports(tracking_id,user_id,category,title,description,priority,latitude,longitude,address,is_anonymous) VALUES(?,?,?,?,?,?,?,?,?,?)');$q->execute([$id,$u['id'],$d['category'],$d['title'],$d['description'],$d['priority'],$d['latitude']??null,$d['longitude']??null,$d['address']??null,!empty($d['anonymous'])]);respond(['ok'=>true,'tracking_id'=>$id,'status'=>'Received'],201);
    }
    if (preg_match('#^reports/(SN-[A-Z0-9-]+)$#',$route,$m) && $method==='GET') {$q=$pdo->prepare('SELECT tracking_id,category,title,priority,status,created_at,updated_at FROM reports WHERE tracking_id=?');$q->execute([$m[1]]);$r=$q->fetch();if(!$r)respond(['ok'=>false,'error'=>'Report not found'],404);respond(['ok'=>true,'data'=>$r]);}
    if ($route==='sos' && $method==='POST') {$u=user();$d=body();requireFields($d,['latitude','longitude']);$q=$pdo->prepare('INSERT INTO sos_incidents(user_id,latitude,longitude,address,status) VALUES(?,?,?,?,"Received")');$q->execute([$u['id'],$d['latitude'],$d['longitude'],$d['address']??null]);respond(['ok'=>true,'incident_id'=>(int)$pdo->lastInsertId(),'status'=>'Received'],201);}
    respond(['ok'=>false,'error'=>'Endpoint not found'],404);
} catch (PDOException $e) { error_log($e->getMessage()); respond(['ok'=>false,'error'=>'Database unavailable. Import database.sql and check api/config.php.'],500); }
  catch (Throwable $e) { error_log($e->getMessage()); respond(['ok'=>false,'error'=>'Server error'],500); }
