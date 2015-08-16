<?php
session_start();
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/x-www-form-urlencoded');


if(isset($_POST["isLoggedIn"])){
	echo isLoggedIn();
}elseif(isset($_POST["isAuthentic"],$_POST["user"],$_POST["pass"])){
	echo authenticateUser($_POST["user"],$_POST["pass"]);
}elseif(isset($_POST["isTrackable"],$_POST["ref"])){
	$ref=$_POST["ref"];
	echo track($ref);
}
function getConnection(){
	$server= "localhost";
	$db_user="root";
	$db_pass="root";
	$db="sanderdeblpai4cu";
	$mysqli = new mysqli($server,$db_user,$db_pass,$db);
	if (mysqli_connect_errno()) {
    	printf("Connect failed: %s\n", mysqli_connect_error());
    	exit();
	}
	return $mysqli;
}
function isLoggedIn(){
	if(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"]==true){
		return 1;
	}else{
		return 0;
	}
}
function authenticateUser($user,$pass) {
	$mysqli=getConnection();
	$sql = "SELECT id,user,pass FROM dpd_users WHERE user='".$user."'";
	if($res = $mysqli->query($sql)){
		while ($row = $res->fetch_assoc()) {
    		if(password_verify($pass,$row["pass"])){
				$_SESSION["logged_in"]=true;
				$_SESSION["user"]=$user;
				return 1;
			}
        	break;
    	}
    	return 0;
	}
}
function track($ref){
	$mysqli = getConnection();
	$sql = "SELECT id,state,reference,map,origin,destination,retrieved,eta,sender FROM dpd_parcels WHERE reference='".$ref."'";
	if($res = $mysqli->query($sql)){
		while ($row = $res->fetch_assoc()) {
    		return json_encode($row);
    	}
    	return 0;
	}
}
?>