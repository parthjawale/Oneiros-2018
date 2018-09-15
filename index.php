<!DOCTYPE html>
<html lang="en">

<head>
  <title>Oneiros' 18</title>
  <link rel="stylesheet" href="/css/libs/fullpage.css">
  <?php require('/head.php') ?>
</head>

<body>
  <? require ('/navbar.php'); ?>
  <main id="fullpage" style="height: 100%">
    <section class="home-splash fp-section">
      <div id="particles">
        <div class="logo">
          <div class="oneiros" data-src="/img/logos/logo.png"></div>
        </div>
        <canvas class="draw"></canvas>
      </div>
      <div id="mext">
        <p>Powered by</p>
        <img src="/img/logos/mext.png" alt="Mext">
      </div>
      <div id="fest-date">
        13 - 14th October
      </div>
    </section>

    <section class="home-about fp-section">
      <h1>Test</h1>
    </section>
  </main>

  <script src="/js/libs/fullpage.js"></script>
  <script src="/js/home/particle.js"></script>
  <script src="/js/home/main.js"></script>
  <script src="/js/common/nav.js"></script>
</body>

</html>