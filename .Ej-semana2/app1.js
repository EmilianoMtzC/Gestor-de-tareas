// 1. Seleccionar los elementos del DOM que vas a usar
//    - El input de Celsius
//    - El botón de convertir
//    - El contenedor donde mostrarás el resultado

const celsiusInput = document.getElementById("celsiusInput");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

// 2. Registrar un "listener" para el evento 'click' del botón
//    - Cuando el usuario haga clic en "Convertir a °F",
//      se debe ejecutar una función que:
//        a) Obtenga el valor del input
//        b) Valide que sea un número válido
//        c) Aplique la fórmula de conversión
//        d) Muestre el resultado en el <div id="result">

convertButton.addEventListener("click", function () {
  // Paso 2.a: leer el valor del input (como texto)
  const valorCelsiusTexto = celsiusInput.value;

  // PISTA:
  // - Usa parseFloat(valorCelsiusTexto) para convertirlo a número.
  // - Verifica con isNaN(...) si el valor no es un número.

  // Paso 2.b: validar el valor
  // if (...) {
  //   // Si no es válido, muestra un mensaje de error en resultDiv
  //   // Tip: puedes usar resultDiv.textContent = "Mensaje de error";
  //   // y agregar/remover clases CSS como "error" u "ok".
  //   return; // Termina la función aquí si hay error
  // }

  // Paso 2.c: aplicar la fórmula de conversión de C a F
  // Fórmula: F = (C * 9/5) + 32
  // const celsius = ...;
  // const fahrenheit = ...;

  // Paso 2.d: mostrar el resultado en el DOM
  // Ejemplo:
  // resultDiv.textContent = `${celsius} °C equivalen a ${fahrenheit} °F`;
  // resultDiv.classList.remove("error");
  // resultDiv.classList.add("ok");
});

// OPCIONAL: podrías agregar más mejoras como:
//  - Limpiar el mensaje cuando el usuario cambie el valor del input
//  - Permitir presionar Enter en el input para convertir sin hacer clic
//  - Redondear el resultado a cierto número de decimales
