<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: Post");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect("localhost","root","","intern_chat");

$data = json_decode(file_get_contents("php://input"));


$username = $data->username;
$password = $data->password;




$result = mysqli_query($con,"SELECT * FROM admin where username='".$username."' AND password='".$password."'");
$nums = mysqli_num_rows($result);
$rs=mysqli_fetch_array($result);

if($nums>=1){
    http_response_code(200);
    $outp="";

        $outp .= ' {"username":"' .$rs["username"] . '",';
        $outp .= '"Status":"200"}';

    echo $outp;    
}
else{
    http_response_code(202);
}

?>
