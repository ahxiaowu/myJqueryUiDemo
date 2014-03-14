<?php 
header('Content-Type:text/html;charset=UTF-8');


/*if($_GET['user']=='boss'){
	echo 'false';
}else{
	echo 'true';
}
*/


if($_GET['user']=='admin' && $_GET['pass']=='admin'){
	echo 'true';
}else{
	echo 'false';
}

?>