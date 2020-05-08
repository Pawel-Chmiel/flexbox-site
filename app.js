const burger = document.querySelector('.burger');
const burgerLines = document.querySelectorAll('.burger__line')
const nav = document.querySelector('.menu__list');
const navItems = document.querySelectorAll('.menu__item');
let flag = true;

navSlide = () => {
    burger.addEventListener('click', () => {
        // Toggle Menu
        nav.classList.toggle('menu__list--active');
        // Animate Menu Items
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = "";

            } else {
                item.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        })
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();