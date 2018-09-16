const item = $('.clubs-grid__item')

$(document).ready(function () {
  $('#fullpage').fullpage()

  item.hover((e) => {
    e.currentTarget.children[0].children[0].style.opacity = 0
    e.currentTarget.children[0].children[1].style.opacity = 1
  }, (e) => {
    e.currentTarget.children[0].children[0].style.opacity = 1
    e.currentTarget.children[0].children[1].style.opacity = 0
  })
})