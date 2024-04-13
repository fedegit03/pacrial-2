document.addEventListener("DOMContentLoaded", function() {
    const desdeInput = document.getElementById("desde");
    const hastaInput = document.getElementById("hasta");
    const totalInput = document.getElementById("total");
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    // Función para calcular el total
    function calcularTotal() {
        const desde = new Date(desdeInput.value);
        const hasta = new Date(hastaInput.value);
        const diffTime = Math.abs(hasta - desde);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const total = diffDays * 10000;
        totalInput.value = total.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
    }

    // Función para mostrar la imagen actual del carrusel
    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    // Función para mostrar la imagen anterior del carrusel
    function prevImage() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    }

    // Función para mostrar la siguiente imagen del carrusel
    function nextImage() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
    }

    // Event listener para calcular el total cuando cambian las fechas
    desdeInput.addEventListener("change", calcularTotal);
    hastaInput.addEventListener("change", calcularTotal);

    // Event listener para el botón "Anterior" del carrusel
    prevButton.addEventListener('click', prevImage);

    // Event listener para el botón "Siguiente" del carrusel
    nextButton.addEventListener('click', nextImage);

    // Mostrar la primera imagen del carrusel al cargar la página
    showImage(currentImageIndex);

    // Calcular el total al cargar la página
    calcularTotal();
    
    // Función para manejar el evento del botón "Cancelar"
    document.getElementById("cancelar").addEventListener("click", function() {
        // Agregar aquí el código para cancelar la operación
        console.log("Operación cancelada");
    });

    // Función para manejar el evento del botón "Reservar"
    document.getElementById("reservar").addEventListener("click", function() {
        // Agregar aquí el código para realizar la reserva
        console.log("Reserva realizada");
    });
});
