<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<title>KhorN's project library</title>
		
		<link rel="icon" type="image/gif" href="images/picto.gif" />
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<script type="text/javascript" src="js/jQuery.js"></script>
		<script type="text/javascript" src="js/page.js"></script>
	</head>

	<?php

	include_once('scripts/bdd.php');

	// Script de generation de la page.
	isset($_GET['p']) ? $pageName = $_GET['p'] : $pageName = "69C8A82B709916FCAE640EA9B4873C1E32C6DFD857970DC3C8353F79D759FEB0";
	$page = GetPage($pageName);
	?>

	<body>

		<menu>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/index.php?p=0E4B4DD5EBEEE428310C4282B5203F3AC1AD0153FDF50B680121B8B01A8222DC">addProject</a></li>
			</ul>
		</menu>

		<?php 
			if($page != ""){
				include_once("Pages/" . $page['page'] . ".php"); 
			}
		?>
	</body>
</html>