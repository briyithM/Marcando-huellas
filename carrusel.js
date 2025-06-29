

document.addEventListener('DOMContentLoaded', () => {
    const carouselTrackContainer = document.querySelector('.carousel-track-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card'); // <-- Usamos tu clase

    // Solo ejecuta si encontramos los elementos del carrusel
    if (!carouselTrackContainer || !prevButton || !nextButton || testimonialCards.length === 0) {
        console.warn("Elementos del carrusel de testimonios no encontrados. El carrusel no se inicializará.");
        return;
    }

    // Calcula el ancho de un solo recuadro más su gap
    const cardWidth = testimonialCards[0].offsetWidth; // Ancho de la primera tarjeta
    // Nota: Es importante que el gap se calcule en el elemento padre que lo define (carousel-track)
    const gap = parseFloat(getComputedStyle(carouselTrack).gap); 
    const scrollAmount = cardWidth + gap; // Cantidad a desplazar por cada clic

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

    // Opcional: Podrías añadir lógica aquí para deshabilitar las flechas
    // cuando se llega al principio o al final del carrusel si lo deseas.
});