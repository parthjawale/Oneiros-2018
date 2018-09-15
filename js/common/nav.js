const nav = $('.nav')
const sword1 = $('.nav ul li:nth-child(1)')
const sword2 = $('.nav ul li:nth-child(2)')
const sword3 = $('.nav ul li:nth-child(3)')

const blackoverlay = $('.nav-container__blackoverlay')
const redoverlay = $('.nav-container__redoverlay')
const whiteoverlay = $('.nav-container__whiteoverlay')
const whiteotheroverlay = $('.nav-container__whiteotheroverlay')

const links = $('.nav-container__whiteoverlay a')

nav.click(function () {
  if (!nav.hasClass('nav-active')) {
    nav.addClass('nav-active')
    sword1.addClass('sword1-activate')
    sword2.addClass('sword2-activate')
    sword3.addClass('sword3-activate')
    $('main').addClass('body-darken')
    showNavPage(true)
  } else {
    nav.removeClass('nav-active')
    sword1.removeClass('sword1-activate')
    sword2.removeClass('sword2-activate')
    sword3.removeClass('sword3-activate')
    $('main').removeClass('body-darken')
    showNavPage(false)
  }
})

const showNavPage = function (bool) {
  if (bool) {
    $('.nav-container').css({
      pointerEvents: 'all'
    })
    whiteoverlay.addClass('activate-whiteoverlay')
    setTimeout(() => {
      blackoverlay.addClass('activate-blackoverlay')
    }, 100);
    setTimeout(() => {
      links.addClass('show-nav-links')
      redoverlay.addClass('activate-redoverlay')
    }, 200);
  } else {
    $('.nav-container').css({
      pointerEvents: 'none'
    })
    links.removeClass('show-nav-links')
    whiteoverlay.removeClass('activate-whiteoverlay')
    setTimeout(() => {
      blackoverlay.removeClass('activate-blackoverlay')
    }, 100);
    setTimeout(() => {
      redoverlay.removeClass('activate-redoverlay')
    }, 200);
  }
}