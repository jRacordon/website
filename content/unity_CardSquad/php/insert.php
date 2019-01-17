<?php
	include_once('access.php');
	

	function hashing($string_to_hash){
		
		$string_to_hash .= strlen($string_to_hash);

		return strtoupper(hash("sha256", $string_to_hash));
	}

	$log = hashing("test");
	$pass = hashing("pass");

	$req = $db->prepare('INSERT INTO users(login, mdp) VALUES (:login, :mdp)');
	
	try{
		$req->bindParam(':login', $log);
		$req->bindParam(':mdp', $pass);
		$req->execute();

		echo 'done';
	}
	catch(PDOException $e){
		echo("<h1> ERROR : </h1><pre>" . $e->getMessage() . '</pre>');		
	}
?>