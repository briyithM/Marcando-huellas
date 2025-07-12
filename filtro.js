  const form = document.getElementById('form-filtros');
  const tarjetas = document.querySelectorAll('.pet-card');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const tipo = form.tipo.value;
    const edad = form.edad.value;
    const tamano = form.tamano.value;

    tarjetas.forEach(tarjeta => {
      const matchTipo = !tipo || tarjeta.dataset.tipo === tipo;
      const matchEdad = !edad || tarjeta.dataset.edad === edad;
      const matchTamano = !tamano || tarjeta.dataset.tamano === tamano;

      if (matchTipo && matchEdad && matchTamano) {
        tarjeta.style.display = "block";
      } else {
        tarjeta.style.display = "none";
      }
    });
  });

