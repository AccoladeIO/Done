<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$param_foreign_id = $request->param_foreign_id;
$param_foreign_id_type = $request->param_foreign_id_type;
$param_image_base64 = $request->param_image_base64;
$param_image_base64 = "\"".$param_image_base64."\"";
$date = date('Y-m-d H:i:s');
$date = "\"".$date."\"";

$con = mysqli_connect(HOST,USER,PASS,DB);

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$sql = "INSERT INTO tb_images (image_id, foreign_id, foreign_id_type, image_base64, tuple_created_datetime)
VALUES (null, $param_foreign_id, $param_foreign_id_type, $param_image_base64, $date)";

if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>