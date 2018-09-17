const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      "club-aperture",
      "focus-desc", "focus-info", "focus-registration",
      "shutterup-desc", "shutterup-info", "shutterup-registration",
      "instaperture-desc", "instaperture-info", "instaperture-registration",
      "showdownofsocieties-desc", "showdownofsocieties-info", "showdownofsocieties-registration",
      "pictureperfect-desc", "pictureperfect-info", "pictureperfect-registration",
      "powershoot-desc", "powershoot-info", "powershoot-registration",

      "club-tmc",
      "octaves-desc", 'octaves-info', 'octaves-registration',
      "dhwani-desc", 'dhwani-info', 'dhwani-registration',
      "saptak-desc", 'saptak-info', 'saptak-registration',
      "twicethevoice-desc", 'twicethevoice-info', 'twicethevoice-registration',
      "ensemble-desc", 'ensemble-info', 'ensemble-registration',
      "beatstreet-desc", 'beatstreet-info', 'beatstreet-registration',
      "woodstock-desc", 'woodstock-info', 'woodstock-registration',

      "club-coreografia",
      "nextar-desc", 'nextar-info', 'nextar-registration',
      "showcase-desc", 'showcase-info', 'showcase-registration',
      "groundzero-desc", 'groundzero-info', 'groundzero-registration',
      "stepsvsbeats-desc", 'stepsvsbeats-info', 'stepsvsbeats-registration',

      "club-cinefilia",
      "admak-desc",'admak-info','admak-registration',
      "awaaz-desc",'awaaz-info','awaaz-registration',
      "humorus-desc",'humorus-info','humorus-registration',
      "missionimprovable-desc",'missionimprovable-info','missionimprovable-registration',



    ],
    afterLoad: (origin, dest) => {
      let option = 0
      option = dest.anchor.split('-')[0] !== 'club' ? 1 : 0
      $('#wordmark').css({
        filter: `invert(${option})`
      })
      if (dest.anchor.split('-')[0] !== 'club') sword.addClass('nav-darken')
      else sword.removeClass('nav-darken')
    }
  })
})
