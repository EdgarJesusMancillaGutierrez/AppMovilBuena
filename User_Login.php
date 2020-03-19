<?php
 

include 'dbconfig.php';
 $json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$name = $obj['name'];
	
	$pass = $obj['pass'];
	
	if($obj['name']!=""){	
	
	$result= $mysqli->query("SELECT * FROM user_details where name='$name' and pass='$pass'");
	
		if($result->num_rows==0){
			echo json_encode('Datos incorrecto');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('Intenta de nuevo');
	}
?>

//MANCILLA GUTIÉRREZ EDGAR JESÚS