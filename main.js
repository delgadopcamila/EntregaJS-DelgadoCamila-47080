var edades = [];

// Función para capturar edad mediante prompt() 
function agregarEdad() {
  var entrada = prompt("Ingrese una edad:");

  // Convertir la entrada a número y verificar si es válida
  var edad = parseInt(entrada);
  if (!isNaN(edad) && edad > 0) {
    edades.push(edad);
    actualizarListaEdades();
  } else {
    alert("Por favor, ingrese una edad válida.");
  }
}

// Función para mostrar las edades ingresadas en el HTML
function actualizarListaEdades() {
  var listaEdades = document.getElementById("edadesIngresadas");
  listaEdades.innerHTML = "Edades ingresadas: " + edades.join(", ");
}

// Función para calcular el promedio y mostrarlo en un alert()
function calcularEdadPromedio() {
  if (edades.length === 0) {
    alert("Por favor, ingrese al menos una edad antes de calcular el promedio.");
    return;
  }

  var sumaEdades = edades.reduce(function (a, b) {
    return a + b;
  });

  var promedio = sumaEdades / edades.length;
  alert("Edades ingresadas: " + edades.join(", ") + "\nEdad promedio: " + promedio.toFixed(2));
}