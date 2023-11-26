document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 1;
    const totalSlides = 3;

    function showSlide(index) {
        const carrusel = document.querySelector('.carrusel');
        carrusel.style.transform = `translateX(-${index * 100}%)`;
    }

    function cambiarSlide(direccion) {
        currentIndex += direccion;
        if (currentIndex > totalSlides) {
            currentIndex = 1;
        } else if (currentIndex < 1) {
            currentIndex = totalSlides;
        }
        showSlide(currentIndex - 1);
    }

    setInterval(() => cambiarSlide(1), 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
});
