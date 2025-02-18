document.addEventListener("DOMContentLoaded", function () {
    fetch("../archivos.json") 
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => mostrarNoticias(data.noticias))
        .catch(error => console.error("Error al cargar las noticias:", error));
});

function mostrarNoticias(noticias) {
    const contenedor = document.getElementById("reseñas");

    noticias.forEach(noticia => {
        let noticiaDiv = document.createElement("div");
        noticiaDiv.classList.add("noticia");

        noticiaDiv.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
            <small><strong>Fecha:</strong> ${noticia.fecha} | <strong>Fuente:</strong> ${noticia.fuente}</small>
        `;

        contenedor.appendChild(noticiaDiv);
    });
}

