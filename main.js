    // Variables globales para almacenar las edades ingresadas
    var edades = [];

    // Función para agregar una edad a la lista
    function agregarEdad() {
      var edadInput = document.getElementById("edad");
      var edad = parseInt(edadInput.value);

      // Verificar que la entrada sea un número válido
      if (!isNaN(edad) && edad > 0) {
        edades.push(edad);
        edadInput.value = "";
        actualizarListaEdades();
      } else {
        alert("Por favor, ingresa una edad válida.");
      }
    }

    // Función para actualizar la lista de edades ingresadas
    function actualizarListaEdades() {
      var listaEdades = document.getElementById("edadesIngresadas");
      listaEdades.innerHTML = "Edades ingresadas: " + edades.join(", ");
    }

    // Función para calcular la edad promedio
    function calcularEdadPromedio() {
      if (edades.length === 0) {
        alert("Por favor, ingresa al menos una edad antes de calcular el promedio.");
        return;
      }

      var sumaEdades = edades.reduce(function (a, b) {
        return a + b;
      });

      var promedio = sumaEdades / edades.length;
      document.getElementById("edadPromedio").textContent = promedio.toFixed(2);
    }