const menuBtn = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.nav-mobile');
const menuNav = document.querySelector('.navbar-nav-mobile');

const navItems = document.querySelectorAll('.navbar-nav-mobile-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}