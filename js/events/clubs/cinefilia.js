const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [],
    afterLoad: (origin, dest) => {
      let option = 0;
      option = dest.anchor.split("-")[0] !== "club" ? 1 : 0;
      $("#wordmark").css({
        filter: `invert(${option})`
      });
      if (dest.anchor.split("-")[0] !== "club") sword.addClass("nav-darken");
      else sword.removeClass("nav-darken");
    }
  });
});
