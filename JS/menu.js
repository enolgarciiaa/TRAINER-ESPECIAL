document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL de la página actual sin el dominio
    let path = window.location.pathname;

    // Obtener todos los enlaces del menú
    let menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        // Primero, quitamos la clase 'active' de todos
        link.classList.remove("active");

        // Comparar la URL actual con el atributo href del enlace
        if (link.pathname === path) {
            link.classList.add("active"); // Agregar la clase activa solo al actual
        }
    });
});
