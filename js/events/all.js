const sword = $('.nav ul li')

$(document).ready(() => {
  $('#fullpage').fullpage({
    anchors: [
      "club-aperture",
      "focus-desc", "focus-info", "focus-registration",
    ],
    afterLoad: (origin, dest) => {
      let option = 0
      option = dest.anchor.split('-')[0] !== 'club' ? 1 : 0
      $('#wordmark').css({
        filter: `invert(${option})`
      })
      sword.css({
        filter: `invert(${option})`
      })
    }
  })
})