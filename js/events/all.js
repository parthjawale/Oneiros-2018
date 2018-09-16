const sword = $('.nav ul li')

$(document).ready(() => {
  $('#fullpage').fullpage({
    anchors: [
      "club-aperture",
      "focus-desc", "focus-info", "focus-registration",
      "shutterup-desc", "shutterup-info", "shutterup-registration",
      "instaperture-desc", "instaperture-info", "instaperture-registration",
      "showdownofsocieties-desc", "showdownofsocieties-info", "showdownofsocieties-registration",
      "pictureperfect-desc", "pictureperfect-info", "pictureperfect-registration",
      "powershoot-desc", "powershoot-info", "powershoot-registration",
    ],
    afterLoad: (origin, dest) => {
      let option = 0
      option = dest.anchor.split('-')[0] !== 'club' ? 1 : 0
      $('#wordmark').css({
        filter: `invert(${option})`
      })
      if (dest.anchor.split('-')[0] !== 'club') sword.css({
        filter: `invert(${option})`
      })
    }
  })
})
