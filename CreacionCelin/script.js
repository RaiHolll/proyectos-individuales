let socios = [];

function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

function registrarSocio() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let tipoMembresia = document.getElementById("tipoMembresia").value;

    let socio = { nombre, edad, tipoMembresia };
    socios.push(socio);

    mostrarSocios();
}

function mostrarSocios() {
    let lista = document.getElementById("listaSocios");
    lista.innerHTML = "<h3>Socios Registrados</h3>";
    socios.forEach(socio => {
        lista.innerHTML += `<p>${socio.nombre} - ${socio.tipoMembresia}</p>`;
    });
}