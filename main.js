var usuarios = [];

var nombreInput = document.getElementById("nombreInput");
var edadInput = document.getElementById("edadInput");
var agregarBtn = document.getElementById("agregarBtn");
var calcularBtn = document.getElementById("calcularBtn");
var usuariosIngresadosDiv = document.getElementById("usuariosIngresados");
var resultadoDiv = document.getElementById("resultado");

// Cargar datos almacenados al cargar la página
window.addEventListener("load", function() {
  if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    actualizarListaUsuarios();
  }
});

agregarBtn.addEventListener("click", function() {
  agregarUsuario();
});

calcularBtn.addEventListener("click", function() {
  calcularEdadPromedio();
});

function agregarUsuario() {
  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value);

  if (nombre.trim() !== "" && !isNaN(edad) && edad > 0) {
    var usuario = { nombre: nombre, edad: edad };
    usuarios.push(usuario);
    actualizarListaUsuarios();
    nombreInput.value = "";
    edadInput.value = "";

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    alert("Por favor, ingresa un nombre y una edad válidos.");
  }
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  actualizarListaUsuarios();

  // Guardar en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function actualizarListaUsuarios() {
  usuariosIngresadosDiv.innerHTML = "Usuarios ingresados: <ul>" +
    usuarios.map(function(usuario, index) {
      return "<li>" + usuario.nombre + " - Edad: " + usuario.edad +
        " <button onclick='eliminarUsuario(" + index + ")'><i class='fas fa-trash'></i> Eliminar</button></li>";
    }).join("") + "</ul>";
}

function calcularEdadPromedio() {
  if (usuarios.length === 0) {
    resultadoDiv.textContent = "Por favor, ingresa al menos un usuario antes de calcular el promedio.";
    return;
  }

  var sumaEdades = usuarios.reduce(function (a, usuario) {
    return a + usuario.edad;
  }, 0);

  var promedio = sumaEdades / usuarios.length;
  resultadoDiv.textContent = "Edad promedio: " + promedio.toFixed(2);
}