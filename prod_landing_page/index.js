
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});

let burger_menu = document.querySelector('#burger-menu');
let menu_list = document.querySelector('.menu-list');

burger_menu.onclick = () => {
    burger_menu.classList.toggle('bx-x');
    menu_list.classList.toggle('open');
}

window.onscroll = () => {
    burger_menu.classList.remove('bx-x');
    menu_list.classList.remove('open');
}