const sections = document.getElementsByTagName('section');
const navLi = document.getElementsByClassName('shortcut');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let now = document.querySelector('html').scrollTop;

  for (i = 0; i < sections.length; i = i + 1) {
    if (now > sections[i].offsetTop - 60 && now < sections[i].offsetTop + sections[i].offsetHeight - 60) {
      navLi[i].classList.add('active');
    } else {
      navLi[i].classList.remove('active');
    }
  }
}
