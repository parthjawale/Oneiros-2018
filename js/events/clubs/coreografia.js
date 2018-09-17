const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-coreografia",
      "nextar-desc",
      "nextar-info",
      "nextar-registration",
      "showcase-desc",
      "showcase-info",
      "showcase-registration",
      "groundzero-desc",
      "groundzero-info",
      "groundzero-registration",
      "stepsvsbeats-desc",
      "stepsvsbeats-info",
      "stepsvsbeats-registration"
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
