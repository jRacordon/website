<?php

$hostname = "localhost";
$username = "root";
$password = "";
$database = "cardsquad";

try{
	$db = new PDO('mysql:host=' . $hostname	. ';dbname=' . $database, $username, $password);
}catch(PDOException $e){
	echo("<h1> ERROR : </h1><pre>" . $e->getMessage() . '</pre>');
}

?>