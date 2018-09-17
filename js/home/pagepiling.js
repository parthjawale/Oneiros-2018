$(document).ready(() => {
  $("#fullpage").fullpage({
    anchors: ["home", "about", "theme"],
    // navigation: {
    //   textColor: "#FFF",
    //   bulletsColor: "#FFF",
    //   position: "right",
    //   tooltips: ["Home", "About", "Theme"]
    // },
    // afterLoad: (anchorLink, index) => {
    //   if (index === 2) handleAboutPage();
    //   else if (index === 3) handleThemePage();
    // }
    afterLoad: (origin, dest) => {
      if (dest.index === 1) handleAboutPage();
      // else if (dest.index === 2) handleThemePage();
      else if (dest.index === 2) handleContactPage();
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

handleContactPage = () => {};
