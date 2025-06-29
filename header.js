window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollThreshold = 50; 

    if (header) { // Nos aseguramos de que el elemento 'header' exista antes de manipularlo
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});