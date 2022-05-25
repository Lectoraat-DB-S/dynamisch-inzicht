<?php

$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=dinwh", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT organisation_name, location FROM organisatie");
  $stmt->execute();


  $result = $stmt->fetch(PDO::FETCH_ASSOC);
  print_r($result);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
};

$conn = null;
