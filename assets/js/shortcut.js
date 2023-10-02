const sections = document.getElementsByTagName('section');
const navLi = document.getElementsByClassName('shortcut');
const topBtn = document.getElementById('topbtn');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let now = document.querySelector('html').scrollTop;

  if (now <= 300) {
    topBtn.classList.add('hide');
  } else {
    topBtn.classList.remove('hide');
  }

  for (i = 0; i < sections.length; i = i + 1) {
    if (now > sections[i].offsetTop - 60 && now < sections[i].offsetTop + sections[i].offsetHeight - 60) {
      navLi[i].classList.add('active');
    } else {
      navLi[i].classList.remove('active');
    }
  }
}
