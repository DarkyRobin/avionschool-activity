
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

let home_title = document.getElementById('home_title');
let home = document.getElementById('home');
console.log(home_title);

let allH1Elements = document.getElementsByTagName('h1');
console.log(allH1Elements);

home_title.innerText = 'Your have been hacked! Pay me b*tch.';
home_title.style.color = "magenta";

let div = document.createElement('div');
let hackedButton = document.createElement('button');
hackedButton.setAttribute('id', 'hacked_button');
hackedButton.textContent = 'Pay me here';
hackedButton.style.width = '100%';
hackedButton.style.backgroundColor = 'red';
hackedButton.style.color = 'yellow'; 
home.appendChild(div);
div.appendChild(hackedButton);
hackedButton.onclick = () => {
    hackedButton.style.backgroundColor = 'black';
    hackedButton.style.color = 'white'; 
}