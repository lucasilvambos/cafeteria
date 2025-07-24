const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('show-header');
  } else {
    header.classList.remove('show-header');
  }
});