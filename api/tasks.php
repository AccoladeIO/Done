<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$con = mysqli_connect(HOST,USER,PASS,DB);

$sth = mysqli_query($con,
"SELECT

t.task_id,
t.taskflow_id,
f.taskflow_name,
t.sender_user_id,
u.user_handle,
t.task_title,
t.task_instruction,
t.done,
t.tuple_created_datetime,
f.taskflow_style,
i.image_base64

FROM tb_task t

JOIN tb_user u
ON u.user_id=t.sender_user_id

JOIN tb_flows f
ON t.taskflow_id=f.taskflow_id

JOIN tb_images i
ON u.user_id=i.foreign_id WHERE i.foreign_id_type = 'user_avatar'
;
");

$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}

echo json_encode(array('results' => $rows));

mysqli_close($con);

?>