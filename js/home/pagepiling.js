$(document).ready(() => {
  $("#pagepiling").pagepiling({
    anchors: ["home", "about", "theme"],
    navigation: {
      textColor: "#FFF",
      bulletsColor: "#FFF",
      position: "right",
      tooltips: ["Home", "About", "Theme"]
    },
    afterLoad: (anchorLink, index) => {
      if (index === 2) handleAboutPage();
      else if (index === 3) handleThemePage();
    }
  });
});

handleAboutPage = () => {
  const header = $(".home .about__header");
  const content = $(".home .about__content");
  const breaker = $(".home .about__breaker");
  const container = $(".home.about");

  container.addClass("home-about-resize");

  setTimeout(() => {
    header.addClass("home-about-showcontent");
  }, 200);
  setTimeout(() => {
    content.addClass("home-about-showcontent");
  }, 300);
  setTimeout(() => {
    breaker.addClass("home-about-breakershow");
  }, 500);
};

handleThemePage = () => {};