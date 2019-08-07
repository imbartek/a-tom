const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const linkss = document.querySelectorAll('.nav__links li');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay-content a');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
});

for(i=0; i<=4; i++){
    links[i].addEventListener('click', () => {
    hamburger.classList.remove('active');
    overlay.classList.remove('open');
});
};