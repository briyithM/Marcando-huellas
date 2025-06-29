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
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollThreshold = 50; 

    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos para el Modal de PayPal ---
    const abrirModalPaypalBtn = document.getElementById('abrirModalPaypal');
    const modalPaypal = document.getElementById('modalPaypal');
    const cerrarModalPaypalBtn = document.getElementById('cerrarModalPaypal');

    // --- Elementos para el Modal de Cuentas Bancarias ---
    const abrirModalBancoBtn = document.getElementById('abrirModalBanco');
    const modalBanco = document.getElementById('modalBanco');
    const cerrarModalBancoBtn = document.getElementById('cerrarModalBanco');

    // --- Funciones para abrir/cerrar PayPal Modal ---
    function abrirPaypalModal() {
        if (modalPaypal) {
            modalPaypal.classList.add('show');
            document.body.style.overflow = 'hidden'; 
        }
    }

    function cerrarPaypalModal() {
        if (modalPaypal) {
            modalPaypal.classList.remove('show');
            document.body.style.overflow = 'auto'; 
        }
    }

    // --- Funciones para abrir/cerrar Banco Modal ---
    function abrirBancoModal() {
        if (modalBanco) {
            modalBanco.classList.add('show');
            document.body.style.overflow = 'hidden'; 
        }
    }

    function cerrarBancoModal() {
        if (modalBanco) {
            modalBanco.classList.remove('show');
            document.body.style.overflow = 'auto'; 
        }
    }

    // --- Event Listeners para PayPal ---
    if (abrirModalPaypalBtn) {
        abrirModalPaypalBtn.addEventListener('click', abrirPaypalModal);
    }
    if (cerrarModalPaypalBtn) {
        cerrarModalPaypalBtn.addEventListener('click', cerrarPaypalModal);
    }
    if (modalPaypal) {
        modalPaypal.addEventListener('click', function(event) {
            if (event.target === modalPaypal) {
                cerrarPaypalModal();
            }
        });
    }

    // --- Event Listeners para Banco ---
    if (abrirModalBancoBtn) {
        abrirModalBancoBtn.addEventListener('click', abrirBancoModal);
    }
    if (cerrarModalBancoBtn) {
        cerrarModalBancoBtn.addEventListener('click', cerrarBancoModal);
    }
    if (modalBanco) {
        modalBanco.addEventListener('click', function(event) {
            if (event.target === modalBanco) {
                cerrarBancoModal();
            }
        });
    }
});
