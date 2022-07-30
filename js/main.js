const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideIntarval;

const nextSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current class
        current.nextElementSibling.classList.add('current');
    } else {
        // Addd current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 
    
const prevSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current class
        current.previousElementSibling.classList.add('current');
    } else {
        // Addd current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 

// Button events
next.addEventListener('click', e => {
    nextSlide();
    // if(auto) {
    //     clearInterval(slideIntarval);
    //     slideIntarval = setInterval(nextSlide, intervalTime)
    // }
});

prev.addEventListener('click', e=> {
    prevSlide();
    // if(auto) {
    //     clearInterval(slideIntarval);
    //     slideIntarval = setInterval(nextSlide, intervalTime)
    // }
});

// Auto 
// if(auto) {
//     // Auto change slide intarvalTime
//     slideIntarval = setInterval(nextSlide, intervalTime);
// }