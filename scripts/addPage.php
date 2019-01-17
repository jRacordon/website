<?php

	include_once('access.php');

	isset($_POST['name']) ? $name = $_POST['name'] : $name = "";
	$msg = "Le nom de page n'est pas valide";

	if($name != ""){
		
		// On vérifie que la page n'existe pas déjà
		$req_select = $_SESSION['db']->prepare('SELECT * FROM sitePages WHERE page=:page');
		$req_select->bindParam(':page', $name);
		$req_select->setFetchMode(PDO::FETCH_ASSOC);
		$req_select->execute();
		$result = $req_select->fetchAll();

		$msg = "Une page avec ce nom existe déjà";

		if(count($result) == 0){

			// On enregistre la nouvelle valeur de page
			$req_insert = $_SESSION['db']->prepare('INSERT INTO sitePages(Ident, page) VALUES (:ident, :page)');
			
			try{
				$h_name = hashing($name);

				$req_insert->bindParam(':ident', $h_name);
				$req_insert->bindParam(':page', $name);
				$req_insert->execute();
				$msg = "La page a été crée avec succès";
			}
			catch(Exception $e){
				$msg = "Erreur bdd : " . $e->getMessage();
			}
		}
	}

	echo $msg;
?>