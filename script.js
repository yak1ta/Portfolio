let btn = document.querySelector('.btn');
let menu = document.querySelector('.menu');

btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    menu.classList.toggle('open');
});