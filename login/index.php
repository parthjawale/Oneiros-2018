<!DOCTYPE html>
<html lang="en">
<head>
  <?php require ('../head.php'); ?>
  <title>Login</title>
</head>
<body>
  <? require ('../navbar.php'); ?>
  <div class="login">
    <div class="login--form-wrapper">
      <div class="login--form">
        <h1 class="title">Login</h1>
        <div class="input-group">
          <label for="name">My Username Is</label>
          <input type="text" name="name" id="name" placeholder="Your Name" autocomplete="off">
        </div>
        <div class="input-group">
          <label for="name">My Pasword Is</label>
          <input type="text" name="name" id="name" placeholder="Your Password" autocomplete="off">
        </div>
        <div class="input-group">
          <button>Submit</button>
        </div>
      </div>
    </div>
    <img class="login--background" src="/img/login/background.png">
  </div>
</body>
</html>