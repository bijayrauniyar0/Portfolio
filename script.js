// your-script.js
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#typed-output', {
    strings: ["Web Developer", "Graphics Designer","Youtuber", "BCA Student"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    loop: true
  });
});

const dropMenu = document.querySelector('.drop-menu')
const toggleBtn = document.querySelector('.toggler')
const toggler = document.querySelector('.toggler i')

toggleBtn.onclick = function(){
    dropMenu.classList.toggle('active')
    const isOpen = dropMenu.classList.contains('active')

    toggler.classList = isOpen
    ? 'fa-solid fa-x'
    :'fa-solid fa-bars'
}



const rating = document.getElementsByClassName('rating')[0];
        const block = document.getElementsByClassName('block');
        for ( var i = 1; i< 100; i++){
            rating.innerHTML += "<div class ='block'></div>"
            block[i].style.transform="rotate("+3.6 * i + "deg)"
            block[i].style.animationDelay= `${i/40}s`;
           
        }