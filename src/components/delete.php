<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect("localhost","root","","intern_chat");

$data = json_decode(file_get_contents("php://input"));


$sql = "delete from users where email='".$data->email. "'";
$result = mysqli_query($con,$sql);



?>
