document.addEventListener('DOMContentLoaded', ()=>{
    let burger = document.querySelector('.header__burger');
    let midLine = document.querySelector('.header__burger_mid');
    let menu = document.querySelector('.header__menu-container');
    burger.addEventListener('click', (e)=>{
        burger.classList.toggle('burger-active');
        menu.classList.toggle('menu-active');
        document.body.classList.toggle('noscroll');
    })
})