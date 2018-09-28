<?php
  // include 'mail/mail.php';

  $content = trim(file_get_contents("php://input"));

  $data = json_decode($content, true);

  $message = $data["message"];
  $email = $data["email"];
  $name = $data["name"];

  if ($message == '' || $email == '' || $name == '') {
    echo json_encode(array('message' => 'empty', 'code' => 405));
    die();
  }
  
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(array('message' => 'invalid email', 'code' => 406));
    die();
  }

  // sendMail('connect@oneiros.in','Promotions@312', $message,$subject, $email);
  // echo json_encode(array('message' => 'Sent', 'code' => 200));
?>
