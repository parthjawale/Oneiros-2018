const nav = $(".nav");
const sword1 = $(".nav ul li:nth-child(1)");
const sword2 = $(".nav ul li:nth-child(2)");
const sword3 = $(".nav ul li:nth-child(3)");

const blackoverlay = $(".nav-container__blackoverlay");
const redoverlay = $(".nav-container__redoverlay");
const whiteoverlay = $(".nav-container__whiteoverlay");
const whiteotheroverlay = $(".nav-container__whiteotheroverlay");

const links = $(".nav-container__whiteoverlay a");

nav.click(() => {
  if (!nav.hasClass("nav-active")) {
    nav.addClass("nav-active");
    sword1.addClass("sword1-activate");
    sword2.addClass("sword2-activate");
    sword3.addClass("sword3-activate");
    $("#black-overlay").addClass("body-darken");
    showNavPage(true);
  } else {
    nav.removeClass("nav-active");
    sword1.removeClass("sword1-activate");
    sword2.removeClass("sword2-activate");
    sword3.removeClass("sword3-activate");
    $("#black-overlay").removeClass("body-darken");
    showNavPage(false);
  }
});

const showNavPage = bool => {
  if (bool) {
    $(".nav-container").css({
      pointerEvents: "all"
    });
    whiteoverlay.addClass("activate-whiteoverlay");
    setTimeout(() => {
      blackoverlay.addClass("activate-blackoverlay");
    }, 100);
    setTimeout(() => {
      redoverlay.addClass("activate-redoverlay");
    }, 200);
    for (let i = 0; i < links.length; i++)
      setTimeout(() => {
        links[i].classList.add("show-nav-links");
      }, i * 100);
  } else {
    $(".nav-container").css({
      pointerEvents: "none"
    });
    links.removeClass("show-nav-links");
    whiteoverlay.removeClass("activate-whiteoverlay");
    setTimeout(() => {
      blackoverlay.removeClass("activate-blackoverlay");
    }, 100);
    setTimeout(() => {
      redoverlay.removeClass("activate-redoverlay");
    }, 200);
  }
};

const loader = `
  <div class="loader-prime">
    <img src="/img/logos/alpha.gif" alt="Alpha" />
  </div>
`;

$("body").prepend(loader);

$(document).ready(() => {
  setTimeout(() => {
    $(".loader-prime").addClass("hide-prime-loader");
  }, 2000);
});

$(".nav-container a").click(e => {
  e.preventDefault();
  const link = e.target.href;

  $(".loader-prime").removeClass("hide-prime-loader");
  setTimeout(() => {
    window.location.replace(link);
  }, 2000);
});
