<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: Post");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$con = mysqli_connect("localhost","root","","intern_chat");

if($username && $password){
$sql = "insert into admin(
    username,
    password
    )
    values(
        '$username',
        '$password'
        )";

$result = mysqli_query($con,$sql);

if ($result){
    $response['data']=array(
        'status'=>'invalid'
    );
    echo json_encode($response);
    
}
}
?>
