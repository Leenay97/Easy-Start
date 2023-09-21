document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.header__burger');
    let midLine = document.querySelector('.header__burger_mid');
    let logo = document.querySelector('.header__logo')
    let menu = document.querySelector('.header__menu-container');
    let contacts = document.querySelector('.header__contacts');
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('menu-active');
        document.body.classList.toggle('noscroll');
        contacts.classList.toggle('show');
    })

    let menuPoint = document.querySelectorAll('.header__menu-point');
    menuPoint.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.remove('burger-active');
            menu.classList.remove('menu-active');
            document.body.classList.remove('noscroll');
            contacts.classList.remove('show');
        })
    })

    var lastScrollTop;
    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            logo.style.top = '-80px';
            burger.style.top = '-80px';
        }
        else {
            logo.style.top = '30px';
            burger.style.top = '30px';
        }
        lastScrollTop = scrollTop;
    });
})