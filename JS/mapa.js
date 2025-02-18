// Función para inicializar el mapa
function inicializarMapa() {
    // Coordenadas del negocio
    let negocio = [43.548878384305944, -5.921334654559285]; 

    // Crear el mapa centrado en la ubicación del negocio
    let mapa = L.map("mapa").setView(negocio, 14);

    // Agregar  OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(mapa);

    // Agregar un marcador  del negocio
    L.marker(negocio).addTo(mapa)
        .bindPopup("<b>Trainer Especial</b><br>¡Ven a visitarnos!")
        .openPopup();

    //  obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            let usuario = [posicion.coords.latitude, posicion.coords.longitude];

            // Agregar un marcador para el usuario
            let marcadorUsuario = L.marker(usuario, { color: "blue" }).addTo(mapa)
                .bindPopup("<b>Tu ubicación</b><br>Aquí estás ahora.")
                .openPopup();

            // Dibujar la ruta del usuario al negocio
            calcularRuta(mapa, usuario, negocio);
        }, () => {
            alert("No pudimos obtener tu ubicación.");
        });
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }
}

// Función para calcular y mostrar la ruta
function calcularRuta(mapa, usuario, negocio) {
    // URL del servicio de enrutamiento de OpenStreetMap (OSM)
    let url = `https://router.project-osrm.org/route/v1/driving/${usuario[1]},${usuario[0]};${negocio[1]},${negocio[0]}?overview=full&geometries=geojson`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let coordenadas = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);

            // Dibujar la ruta en el mapa
            L.polyline(coordenadas, { color: "blue", weight: 4 }).addTo(mapa);
        })
        .catch(error => console.log("Error calculando la ruta:", error));
}

// Llamar a la función cuando cargue la página
document.addEventListener("DOMContentLoaded", inicializarMapa);
