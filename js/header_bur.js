//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menu__list = document.querySelector('.menu__list');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock'); //запрет скрола страницы при открытом меню
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

    })
    menu__list.addEventListener('click', function (e) {
        document.body.classList.remove('_lock'); //запрет скрола страницы при открытом меню
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');

    })
}