const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-tmc",
      "octaves-desc",
      "octaves-info",
      "octaves-registration",
      "dhwani-desc",
      "dhwani-info",
      "dhwani-registration",
      "saptak-desc",
      "saptak-info",
      "saptak-registration",
      "twicethevoice-desc",
      "twicethevoice-info",
      "twicethevoice-registration",
      "ensemble-desc",
      "ensemble-info",
      "ensemble-registration",
      "beatstreet-desc",
      "beatstreet-info",
      "beatstreet-registration",
      "woodstock-desc",
      "woodstock-info",
      "woodstock-registration"
    ],
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
