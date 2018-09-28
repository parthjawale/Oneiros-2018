<?php
$conn = mysqli_connect('localhost','parth','_a3eYbhA1$', 'mun');
$query = 'SELECT * from delegate where (upper(institution)="MANIPAL UNIVERSITY JAIPUR") OR (upper(institution)="MUJ")';
// $query = 'SELECT mob_call from delegate where fullname="Parth Jawale"';
$result = $conn->query($query);
$mobile;
$t = [];
$i = 0;$name;
// $url = "http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4&mobiles='.$mobile.'&authkey=176579AeD2MuBzGviz5aae948f&country=91&message=Hello fellow MUNer, Team MUJMUN has organized a workshop at 5:30pm in Old Audi today. The workshop will explain the MUNing process in detail. Thank you."
while ($row = $result->fetch_assoc()) {
  $t[$i] = $row['mob_call'];
  $name = $row['fullname'].$name;
  $i = $i + 1;
}
echo $name;
$u;
$j;
for ($i = 0; $i < sizeof($t); $i++) {
  for ($j = $i; (($j < ($i+10)) && ($j < sizeof($t))); $j++) {
    $mobile = $t[$j].','.$mobile;
  }
  $u = '<p>Number '.$i.':'.$mobile.'</p><br>'.$u;
  $i = $j;
  // $curl = curl_init();
  // curl_setopt_array($curl, array(
  // CURLOPT_URL => "http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4&mobiles='.$mobile.'&authkey=176579AeD2MuBzGviz5aae948f&country=91&message=Hello fellow MUNer, Team MUJMUN has organized a workshop at 5:30pm in Old Audi today. The workshop will explain the MUNing process in detail. Thank you.",
  // CURLOPT_RETURNTRANSFER => true,
  // CURLOPT_ENCODING => "",
  // CURLOPT_MAXREDIRS => 10,
  // CURLOPT_TIMEOUT => 30,
  // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  // CURLOPT_CUSTOMREQUEST => "GET",
  // CURLOPT_SSL_VERIFYHOST => 0,
  // CURLOPT_SSL_VERIFYPEER => 0,
  // ));
  // $mobile = '';
  // $response = curl_exec($curl);
  // $err = curl_error($curl);
  //
  // curl_close($curl);
  //
  // if ($err) {
  // echo "cURL Error #:" . $err;
  // } else {
  // echo $response;
  // }
   // sms end
}
// echo $u;
// $curl = curl_init();
  // curl_setopt_array($curl, array(
  // CURLOPT_URL => "http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4&mobiles='.$mobile.'&authkey=176579AeD2MuBzGviz5aae948f&country=91&message=Hello fellow MUNer, Team MUJMUN has organized a workshop at 5:30pm in Old Audi today. The workshop will explain the MUNing process in detail. Thank you."
  // CURLOPT_RETURNTRANSFER => true,
  // CURLOPT_ENCODING => "",
  // CURLOPT_MAXREDIRS => 10,
  // CURLOPT_TIMEOUT => 30,
  // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  // CURLOPT_CUSTOMREQUEST => "GET",
  // CURLOPT_SSL_VERIFYHOST => 0,
  // CURLOPT_SSL_VERIFYPEER => 0,
  // ));
  //
  // $response = curl_exec($curl);
  // $err = curl_error($curl);

  // curl_close($curl);

  // if ($err) {
  // echo "cURL Error #:" . $err;
  // } else {
  // echo $response;
  // }
  //  sms end

?>
