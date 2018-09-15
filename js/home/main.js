var particleInit = function () {
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;

  var ps = new Particle({
    ptlGap: isMobile || isSmall ? 3 : 5,
    ptlSize: isMobile || isSmall ? 3 : 3,
    width: 1e9,
    height: 1e9,
    mouseForce: 1000
  });

  (window.addEventListener ?
    window.addEventListener('click', function () {
      ps.init(true)
    }, false) :
    window.onclick = function () {
      ps.init(true)
    });
}

particleInit()

$(document).ready(function () {
  $('#pagepiling').pagepiling();
});