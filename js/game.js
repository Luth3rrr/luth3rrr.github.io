

function openFullscreen() {
  var elem = document.querySelector("iframe");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var home = document.querySelector('.home');

  home.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
});

