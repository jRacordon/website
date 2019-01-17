<?php

include_once('access.php');

function SelectTable($table){
	$req = $_SESSION['db']->prepare('SELECT * FROM ' . $table);
	$req->setFetchMode(PDO::FETCH_ASSOC);
	$req->execute();
	$result = $req->fetchAll();

	return $result;
}

function SelectById($table, $id){
	$req = $_SESSION['db']->prepare('SELECT * FROM :table WHERE id=:id');
	$req->bindParam(':table', $table);
	$req->bindParam(':id', $id);
	$req->setFetchMode(PDO::FETCH_ASSOC);
	$req->execute();
	$result = $req->fetchAll();

	return $result;
}

function GetPage($ident){
	$req = $_SESSION['db']->prepare('SELECT * FROM sitepages WHERE Ident=:ident');
	$req->bindParam(':ident', $ident);
	$req->setFetchMode(PDO::FETCH_ASSOC);
	$req->execute();
	$result = $req->fetchAll();

	if(count($result) > 0){
		return $result[0];
	}

	return "";
}
?>