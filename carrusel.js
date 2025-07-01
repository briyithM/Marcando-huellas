

document.addEventListener('DOMContentLoaded', () => {
    const carouselTrackContainer = document.querySelector('.carousel-track-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card'); //

    // Solo ejecuta si encontramos los elementos del carrusel
    if (!carouselTrackContainer || !prevButton || !nextButton || testimonialCards.length === 0) {
        console.warn("Elementos del carrusel de testimonios no encontrados. El carrusel no se inicializará.");
        return;
    }

 
    const cardWidth = testimonialCards[0].offsetWidth; // Ancho de la primera tarjeta
    
    const gap = parseFloat(getComputedStyle(carouselTrack).gap); 
    const scrollAmount = cardWidth + gap;

    nextButton.addEventListener('click', () => {
        carouselTrackContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
       prevButton.addEventListener('click', () => {
        carouselTrackContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});
