$(".home-splash").mousemove(e => {
  const x = e.offsetX;
  const y = e.offsetY;
  const circle = $(".home-splash .ono-animatedbtn__circle");
  circle.css({
    left: `${x / (window.innerWidth / 100)}px`,
    top: `${y / 40}px`
  });
});

$(".home-about").mousemove(e => {
  const x = e.offsetX;
  const y = e.offsetY;
  const circle = $(".home-about .ono-animatedbtn__circle");
  circle.css({
    left: `${x / (window.innerWidth / 100)}px`,
    top: `${y / 40}px`
  });
});
