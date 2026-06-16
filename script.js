// Esperar que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    // Botón Entrar
    const botonEntrar = document.querySelector(".btn-primary");

    botonEntrar.addEventListener("click", entrar);

    // Obtener imágenes de los lugares
    const imagenes = document.querySelectorAll(".card img");

    // El Tunco
    imagenes[0].addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.getElementById("playa"));
        modal.show();
    });

    // Ruta de las Flores
    imagenes[1].addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.getElementById("montana"));
        modal.show();
    });

    // Lago de Coatepeque
    imagenes[2].addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.getElementById("lago"));
        modal.show();
    });

    // Permitir Enter en los campos
    document.getElementById("nombre").addEventListener("keypress", validarEnter);
    document.getElementById("apellido").addEventListener("keypress", validarEnter);

});


// Función para ingresar
function entrar() {

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();

    if (nombre === "" || apellido === "") {
        alert("Completa todos los campos");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("contenido").style.display = "block";

    document.getElementById("bienvenida").innerHTML =
        `¡Bienvenido/a ${nombre} ${apellido}!`;
}


// Función para detectar Enter
function validarEnter(event) {

    if (event.key === "Enter") {
        entrar();
    }

}