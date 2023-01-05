<?php

  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $dbname = "xi_dach";

  if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
  {
    die("Failed to connect");
  }
?>
    
