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

      $('.majorevent__content').fadeOut()
      setTimeout(() => {
        $('.majorevent__header').fadeIn()
      }, 500);
      return
    }

    majoreventoverlay.addClass('overlay-darken')
    majorevent.addClass('majorevent-contract')
    e.target.classList.add('majorevent-expand')

    setTimeout(() => {
      $('.majorevent__header').fadeOut()
      setTimeout(() => {
        $('.majorevent__content').fadeIn()
      }, 500);
    }, 500);
  })
})