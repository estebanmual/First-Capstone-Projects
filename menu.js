/*
    Helper functions
*/
function makeScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('notScrollable');
  body.classList.add('scrollable');
}

function makeNotScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('scrollable');
  body.classList.add('notScrollable');
}

/*
    Top Navbar
*/

const btnMenu = document.querySelector('.button-menu');
btnMenu.addEventListener('click', () => {
  const btnIcon = document.getElementById('button-icon');
  const menuOptions = document.querySelector('.topnav');
  if (btnIcon.matches('.flaticon-menu')) {
    menuOptions.id = 'visible';
    btnIcon.classList.add('flaticon-close');
    btnIcon.classList.remove('flaticon-menu');
    makeNotScrollable();
  } else if (btnIcon.matches('.flaticon-close')) {
    menuOptions.removeAttribute('id');
    btnIcon.classList.remove('flaticon-close');
    btnIcon.classList.add('flaticon-menu');
    makeScrollable();
  }
});