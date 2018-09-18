const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-cinefilia",
      "admak-desc",'admak-info','admak-rules','admak-registration',
      "humorus-desc",'humorus-info','humorus-rules','humorus-registration',
      "missionimprovable-desc",'missionimprovable-info','missionimprovable-rules','missionimprovable-registration',
      "monoact-desc",'monoact-info','monoact-rules','monoact-registration',
      "pandorasbox-desc",'pandorasbox-info','pandorasbox-rules','pandorasbox-registration',
      "rangmanch-desc",'rangmanch-info','rangmanch-rules','rangmanch-registration',
      "spoofydo-desc",'spoofydo-info','spoofydo-rules','spoofydo-registration'
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
