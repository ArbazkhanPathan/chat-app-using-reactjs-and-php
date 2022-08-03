<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect("localhost","root","","intern_chat");

$data = json_decode(file_get_contents("php://input"));






$result = mysqli_query($con,"SELECT * FROM users");

$outp = "";

while($rs=mysqli_fetch_array($result)) {
    if ($outp != "") {$outp .=",";}
    $outp .= '{"fname":"' .$rs["fname"]. '",';  
    $outp .= '"lname":"' .$rs["lname"]. '",';
    $outp .='"email":"'.$rs["email"]   .'"}';
}
$outp = '{"records":['.$outp.']}';
        

echo ($outp);    


?>
