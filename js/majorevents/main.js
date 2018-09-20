const destival = $('.destival')
const fashionshow = $('.fashionshow')
const requiem = $('.requiem')
const majorevent = $('.majorevent')
const majoreventoverlay = $('.majorevent__overlay')

$(document).ready(() => {
  majorevent.click((e) => {
    if (majorevent.hasClass('majorevent-expand')) {
      majorevent.removeClass('majorevent-contract')
      majorevent.removeClass('majorevent-expand')
      majoreventoverlay.removeClass('overlay-darken')

      majorevent.css({ pointerEvents: 'none' })
      $('.majorevent__content').css({ display: 'none' })
      setTimeout(() => {
        majorevent.css({ pointerEvents: 'all' })
        $('.majorevent__header').fadeIn()
      }, 200);
      return
    }

    majoreventoverlay.addClass('overlay-darken')
    majorevent.addClass('majorevent-contract')
    e.target.classList.add('majorevent-expand')
    majorevent.css({ pointerEvents: 'none' })

    setTimeout(() => {
      $('.majorevent__header').fadeOut()
      setTimeout(() => {
        majorevent.css({ pointerEvents: 'all' })
        $('.majorevent__content').fadeIn()
      }, 500);
    }, 500);
  })
})

const all = document.getElementsByClassName('majorevent')

for (let i = 0; i < all.length; i++) {
  all[i].addEventListener('mousemove', (e) => {
    console.log(e)
    const splash = all[i].childNodes[1]
    const x = e.layerX
    const y = e.clientY

    splash.style.transform = `translate(-${x / 20}px, -${y / 20}px) scale(1.2)`
  })

  all[i].addEventListener('mouseleave', (e) => {
    const splash = all[i].childNodes[1]
    splash.style.transform = `scale(1)`
  })
}