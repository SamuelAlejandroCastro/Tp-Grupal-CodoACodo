var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('b1')

var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
        alert("Escribí tu nombre");
        e.preventDefault();
    }
}

var validarEmail = function (e) {
    if (formulario.email.value == 0) {
        alert("Escribí tu email");
        e.preventDefault();
    }
}

var validarMensaje = function (e) {
    if (formulario.mensaje.value == 0) {
        alert("Escribinos tu mensaje");
        e.preventDefault();
    }
}

var validar = function (e) {
    validarNombre(e)
    validarEmail(e)
    validarMensaje(e)
}

formulario.addEventListener("submit", validar);
