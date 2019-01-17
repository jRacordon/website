<?php
	function hashing($string_to_hash){
		
		$string_to_hash .= strlen($string_to_hash);
		return strtoupper(hash("sha256", $string_to_hash));
	}

	echo hashing('home');
?>