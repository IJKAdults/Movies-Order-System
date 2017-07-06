<?php
$data = $_GET["data"];// 接受数据
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Method:GET");
$url = file_get_contents($data);//读取接受的数据
echo $url;
?>