function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let condiciones = document.getElementById("condiciones").checked;
    
    let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{1,15}$/;
    let apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,40}$/;
    let telefonoRegex = /^[0-9]{9}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!nombreRegex.test(nombre)) {
        alert("El nombre solo puede contener letras y tener un máximo de 15 caracteres.");
        return false;
    }
    if (!apellidosRegex.test(apellidos)) {
        alert("Los apellidos solo pueden contener letras y tener un máximo de 40 caracteres.");
        return false;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener exactamente 9 números.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }
    if (!condiciones) {
        alert("Debes aceptar las condiciones de privacidad.");
        return false;
    }
    return true;
}

function calcularPresupuesto() {
    let producto = parseInt(document.getElementById("producto").value);
    let plazo = parseInt(document.getElementById("plazo").value);
    let extras = document.querySelectorAll("input[name='extra']:checked");
    let extraTotal = 0;
    extras.forEach(extra => { extraTotal += parseInt(extra.value); });
    
    let descuento = plazo > 6 ? 0.9 : 1; 
    let total = (producto + extraTotal) * descuento;
    document.getElementById("presupuesto").textContent = "Total: " + total.toFixed(2) + "€";
}