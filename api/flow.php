<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$con = mysqli_connect(HOST,USER,PASS,DB);

$sth = mysqli_query($con,
"SELECT

f.taskflow_id,
f.taskflow_name,
u.user_handle,
f.active,
f.taskflow_description,
f.taskflow_style,
f.tuple_created_datetime

FROM tb_flows f

JOIN tb_user u
ON u.user_id=f.owner_user_id
;
");

$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}

echo json_encode(array('results' => $rows));

mysqli_close($con);

?>