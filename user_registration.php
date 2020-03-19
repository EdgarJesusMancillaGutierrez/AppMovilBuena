<?php include 'dbconfig.php';


	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // name store into $name.
	$name = $obj['name'];
	 
	// same with $email.
	$correo = $obj['correo'];
	 
	// same with $password.
	$pass= $obj['pass'];
	
	if($obj['correo']!="")
	{
	
	$result= $mysqli->query("SELECT * FROM user_details where correo='$correo'");
	
	
		if($result->num_rows>0){
			echo json_encode('El correo ya existe');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $mysqli->query("insert into user_details (name,correo,pass) values('$name','$correo','$pass')");
			
			if($add){
				echo  json_encode('Usario registrado'); // alert msg in react native
			}
			else{
			   echo json_encode('Verifica tu conexión'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}

	
?>
//MANCILLA GUTIÉRREZ EDGAR JESÚS