<?php
define('HOST','localhost');
define('USER','root');
define('PASS','');
define('DB','test');

$con = mysqli_connect(HOST,USER,PASS,DB);

$sth = mysqli_query($con,
"SELECT

s.task_id,
p.powerup_icon_bootstrap,
p.powerup_icon_ionic,
p.powerup_name,
p.powerup_template_url

FROM tb_subtask s

JOIN tb_powerups p
ON s.powerup_id=p.powerup_id
;
");

$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}

echo json_encode(array('results' => $rows));

mysqli_close($con);

?>