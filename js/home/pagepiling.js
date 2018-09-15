$(document).ready(function () {
  $('#pagepiling').pagepiling({
    anchors: ['home', 'about', 'theme'],
    navigation: {
      'textColor': '#FFF',
      'bulletsColor': '#FFF',
      'position': 'right',
      'tooltips': ['Home', 'About', 'Theme']
    },
    afterLoad: (anchorLink, index) => {
      if (index === 2) handleAboutPage()
      else if (index === 3) handleThemePage()
    }
  })
})

handleAboutPage = () => {

}

handleThemePage = () => {

}