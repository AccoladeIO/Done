<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$con = mysqli_connect(HOST,USER,PASS,DB);

$sth = mysqli_query($con, "SELECT * FROM tb_chats;");

$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}

echo json_encode(array('results' => $rows), JSON_FORCE_OBJECT);

mysqli_close($con);

?>