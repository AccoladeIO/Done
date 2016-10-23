<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$param_image_id = $request->image_id;

$con = mysqli_connect(HOST,USER,PASS,DB);

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$sql = "DELETE FROM tb_images WHERE image_id = $param_image_id";

if ($con->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>