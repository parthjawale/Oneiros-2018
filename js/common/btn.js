$(document).ready(function() {
  const isSmall = window.innerWidth < 500
  $('.home-splash').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-splash .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('.home-about').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-about .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('body').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.events-list > .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })
})
