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
  sendMail('webadmin@oneiros.in','_a3eYbhA1$', $message,$subject, $email);
  // echo json_encode(array('message' => 'Sent', 'code' => "200"));
?>
