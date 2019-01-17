<?php
$hostname = "localhost";
$username = "root";
$password = "";
$database = "website";

try{
	$_SESSION['db'] = new PDO('mysql:host=' . $hostname	. ';dbname=' . $database, $username, $password);
}catch(PDOException $e){
	echo("<h1> ERROR : </h1><pre>" . $e->getMessage() . '</pre>');
}


function hashing($string_to_hash){
	
	$string_to_hash .= strlen($string_to_hash);
	return strtoupper(hash("sha256", $string_to_hash));
}
?>