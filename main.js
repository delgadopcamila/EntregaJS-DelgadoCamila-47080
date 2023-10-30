var edades = [];

var edadInput = document.getElementById("edadInput");
var agregarBtn = document.getElementById("agregarBtn");
var calcularBtn = document.getElementById("calcularBtn");
var edadesIngresadasDiv = document.getElementById("edadesIngresadas");
var resultadoDiv = document.getElementById("resultado");

agregarBtn.addEventListener("click", function() {
  agregarEdad();
});

calcularBtn.addEventListener("click", function() {
  calcularEdadPromedio();
});

function agregarEdad() {
  var edad = parseInt(edadInput.value);
  if (!isNaN(edad) && edad > 0) {
    edades.push(edad);
    actualizarListaEdades();
    edadInput.value = "";
  } else {
    alert("Por favor, ingresa una edad válida.");
  }
}

function actualizarListaEdades() {
  edadesIngresadasDiv.textContent = "Edades ingresadas: " + edades.join(", ");
}

function calcularEdadPromedio() {
  if (edades.length === 0) {
    resultadoDiv.textContent = "Por favor, ingresa al menos una edad antes de calcular el promedio.";
    return;
  }

  var sumaEdades = edades.reduce(function (a, b) {
    return a + b;
  });

  var promedio = sumaEdades / edades.length;
  resultadoDiv.textContent = "Edad promedio: " + promedio.toFixed(2);
}