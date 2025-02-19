document.addEventListener("DOMContentLoaded", function () {
    fetch("/json/galeria.json")
        .then(response => response.json())
        .then(data => {
            let galeria = document.getElementById("galeria");

            data.imagenes.forEach(imagen => {
                let div = document.createElement("div");
                div.classList.add("imagen-container");

                let img = document.createElement("img");
                img.src = imagen.url;
                img.alt = imagen.titulo;

                let titulo = document.createElement("p");
                titulo.textContent = imagen.titulo;

                div.appendChild(img);
                div.appendChild(titulo);
                galeria.appendChild(div);
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});
