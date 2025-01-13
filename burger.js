document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.header__burger-button');
    const burgerMenu = document.querySelector('.header__burger-menu');

    burgerButton.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });

//закрытие меню при клике на пункт меню
const burgerLinks = document.querySelectorAll('.header__burger-link');
    burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        });
    });
//закрываем меню если кликнули вне
document.addEventListener('click', (event) => {
  if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
    burgerMenu.classList.remove('active');
  }
});
});