const lights = document.querySelector('.light-source');
const container = document.querySelector('#m-container');
const links = document.querySelector('nav');
const socials = document.querySelector('.a-container');
const title = document.querySelector('.page-title');
const left = document.querySelector('#left-content');
const middle = document.querySelector('.adventure-title');
const text = document.querySelector('.text');

// Not sure if this is the most efficient way, but I used a one-on-one selector to give a 'toggle' class called 'active' to every class selected above. With this, whenever I click on the 'sun' imagem, it will change to the .active class in CSS. 
function modeswitch(){
    links.classList.toggle('active');
    container.classList.toggle('active');
    title.classList.toggle('active');
    socials.classList.toggle('active');
    left.classList.toggle('active');
    lights.classList.toggle('active');
    middle.classList.toggle('active');
    text.classList.toggle('active');
}