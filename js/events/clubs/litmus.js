const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-litmus",
      "bamboozled-desc",
      "bamboozled-info",
      "bamboozled-rules",
      "bamboozled-registration","ekphrasis-desc",
      "ekphrasis-info",
      "ekphrasis-rules",
      "ekphrasis-registration","jam-desc",
      "jam-info",
      "jam-rules",
      "jam-registration","britishparliamentarydebate-desc",
      "britishparliamentarydebate-info",
      "britishparliamentarydebate-rules",
      "britishparliamentarydebate-registration","pictionary-desc",
      "pictionary-info",
      "pictionary-rules",
      "pictionary-registration","songsmith-desc",
      "songsmith-info",
      "songsmith-rules",
      "songsmith-registration",
      "voiceover-desc",
      "voiceover-info",
      "voiceover-rules",
      "voiceover-registration"

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
