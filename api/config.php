<?php
declare(strict_types=1);

/* Change these values for your local XAMPP database before running the API. */
const DB_HOST = '127.0.0.1';
const DB_NAME = 'surakshya_nepal';
const DB_USER = 'root';
const DB_PASS = '';
const JWT_SECRET = 'replace-this-with-a-long-random-secret-before-production';

function db(): PDO {
    static $pdo;
    if (!$pdo) {
        $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    }
    return $pdo;
}
