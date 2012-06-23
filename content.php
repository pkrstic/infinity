<?php
header('Content-type: application/json; charset=utf-8');
$bg [] = rand(200, 255);
$bg [] = rand(200, 255);
$bg [] = rand(200, 255);

$cl [] = rand(100, 200);
$cl [] = rand(100, 200);
$cl [] = rand(100, 200);

$response['content'] = '<div class="infBox" style="background:rgb('.implode(',', $bg).');color:rgb('.implode(',', $cl).');">PAGE: '. $_GET['page'] .'</div>';
echo json_encode($response);