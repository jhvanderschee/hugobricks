<?php
// config
$formname = 'New website submission for Hugobricks';
$redirect = 'https://www.hugobricks.preview.usecue.com/';
$url = 'https://cms.usecue.com/form.php';

// code
session_start();
$host = $_SERVER['HTTP_HOST'];
$referer = $_SERVER['HTTP_REFERER']??'';
$key = 'form@'.$referer;
if ($_SERVER['REQUEST_METHOD']=='POST') {
  $duration = 0;
  if (isset($_SESSION[$key])) {
    $duration = microtime(true)-$_SESSION[$key];
  }
  $language = $_SERVER["HTTP_ACCEPT_LANGUAGE"]??'';
  $refhost = parse_url($referer, PHP_URL_HOST);
  $human = $refhost==$host && $duration>5 && strlen($language)>4;
  $spamscore = $human?0:5;
  $data = array_merge(['_refhost'=>$refhost, '_duration'=>$duration, '_language'=>$language],$_POST);
  $form = [
    'host_name' => $host,
    'form_name' => $formname,
    'submitted_values' => json_encode($data),
    'spam_score' => $spamscore,
  ];
  $ch = curl_init();
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, 1);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $form);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
  $result = trim(curl_exec($ch));
  $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  if ($httpcode!=200 || $result!='OK') {
    // log maybe?
  }
  header('Location: '.$redirect);
  die();
} else {
  if (!isset($_SESSION[$key])) {
    $_SESSION[$key] = microtime(true);
  }
  $_SESSION[$key.'_count'] = ($_SESSION[$key.'_count'] ?? 0)+1;
  header('Content-Type: image/png');
  echo base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=');
}
