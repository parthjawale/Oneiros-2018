<?php
  include 'mail.php';

  $content = trim(file_get_contents("php://input"));

  $data = json_decode($content, true);

  $message = $data["message"];
  $email = $data["email"];
  $name = $data["name"];

  if ($message == '' || $email == '' ) {
    echo json_encode(array('message' => 'empty', 'code' => "405"));
    die();
  }

  $subject = "Succesful Registration";
  sendMail('info@oneiros.in','Promotions@312', $message,$subject, $email);
  // echo json_encode(array('message' => 'Sent', 'code' => "200"));
?>
