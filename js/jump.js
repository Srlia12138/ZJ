window.addEventListener('scroll', function () {
  let top = window.scrollY
  if (top >= 50) {
      $('.zj').css('left', '165vh')
  } else {
      $('.zj').css('left', '-4vh')
  }
})