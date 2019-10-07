const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.overlay-content a');
const linksArray = Array.from(links);


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
});

for(let i=0; i<linksArray.length; i++){
    linksArray[i].addEventListener('click', () => {
    hamburger.classList.remove('active');
    overlay.classList.remove('open');
});
};