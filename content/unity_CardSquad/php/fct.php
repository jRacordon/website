<?php
	include_once('access.php');

	$request = $_POST['request'];

	function hashing($string_to_hash){
		
		$string_to_hash .= strlen($string_to_hash);
		return strtoupper(hash("sha256", $string_to_hash));
	}


	switch($request){

		// player_login
		case 'D2FC0E45E54A0F9CFFC9EAB16F736546A7D898F0FBF85BDA75ED029380822413':
			
			$login = $_POST['login'];
			$passw = $_POST['passw'];

			$req = $db->prepare('SELECT * FROM users WHERE login=:login AND mdp=:pass');
			$req->bindParam(':login', $login);
			$req->bindParam(':pass', $passw);
			$req->setFetchMode(PDO::FETCH_ASSOC);
			$req->execute();
			$result = $req->fetchAll();

			if(count($result) > 0){
				echo json_encode($result);
			}
			else{
				header("HTTP/1.1 430 Login ou mot de passe incorrects");
				exit;
			}
			break;

		// player_insert
		case 'AA9B786279BB2E626FBCEBE8FC19627C41853A8233EB0D71506BD8A29E8E1BF8':
			$req = $db->prepare('INSERT INTO users(login, mdp) VALUES (:login, :mdp)');
	
			try{
				$req->bindParam(':login', hashing("test"));
				$req->bindParam(':mdp', hashing("pass"));
				$req->execute();
			}
			catch(Exception $e){
				echo("<h1> ERROR : </h1><pre>" . $e->getMessage() . '</pre>');		
			}
			break;
	}

	
	
?>