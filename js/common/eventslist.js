$(document).ready(function() {
  const eventsListBtn = $('.events-list')
  const selectedEvent = $('.events-list__item--selected')
  const eventsList = $('.events-list > ul')
  const eventsListItem = $('.events-list > ul li')
  eventsListBtn.on('click', () => {
    eventsList.toggleClass('showlist')
  })
  eventsListItem.on('click', function() {
    const text = $(this)
      .children('a')
      .text()
    console.log($(this))
    console.log($(this).children('a'))
    selectedEvent.text(text)
  })
})
