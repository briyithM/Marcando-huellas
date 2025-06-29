

const carruselSlides = document.querySelectorAll('.carrusel-slide');
let currentSlideIndex = 0;

function showNextSlide() {
    
    carruselSlides[currentSlideIndex].classList.remove('active');

 
    currentSlideIndex = (currentSlideIndex + 1) % carruselSlides.length;
    carruselSlides[currentSlideIndex].classList.add('active');
}
carruselSlides[currentSlideIndex].classList.add('active'); 

setInterval(showNextSlide, 5000); // Puedes ajustar el tiempo si lo deseas

