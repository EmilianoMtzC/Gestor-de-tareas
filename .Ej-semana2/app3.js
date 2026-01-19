// OBJETIVO DEL EJERCICIO:
// - Al hacer clic en el botón "Cambiar color":
//   * Si el fondo está en modo claro, cambiar a un color oscuro.
//   * Si está en modo oscuro, volver al color claro.
// - Actualizar el texto de estado para indicar "claro" u "oscuro".

// 1. Crear una variable que indique si estamos en modo oscuro o no.
//    PISTA: puede ser un booleano, por ejemplo: let esOscuro = false;
let esOscuro = false;

// 2. Seleccionar del DOM:
//    - El botón con id "toggleColorBtn".
//    - El elemento donde se muestra el estado (statusText).
//    - El elemento body (para cambiar su background).
const toggleColorBtn = document.getElementById("toggleColorBtn");
const statusText = document.getElementById("statusText");
// document.body te da acceso al <body> directamente.
const body = document.body;

// 3. Crear una función que ACTUALICE el texto de estado según el modo actual.
//    - Si esOscuro es true -> "Color actual: oscuro"
//    - Si esOscuro es false -> "Color actual: claro"
//    PISTA: puedes cambiar solo el contenido del <span> dentro de statusText
//           usando querySelector.
function actualizarEstado() {
  // const span = statusText.querySelector("span");
  // if (esOscuro) {
  //   span.textContent = "oscuro";
  // } else {
  //   span.textContent = "claro";
  // }
}

// 4. Crear una función que cambie el color de fondo según esOscuro.
//    - Si esOscuro es true, poner un color oscuro (ej. #222222).
//    - Si esOscuro es false, poner blanco (#ffffff).
//    PISTA: usa body.style.backgroundColor.
function aplicarColorDeFondo() {
  // if (esOscuro) {
  //   body.style.backgroundColor = "#222222";
  // } else {
  //   body.style.backgroundColor = "#ffffff";
  // }
}

// 5. Agregar un listener de clic al botón.
//    - Cada vez que se haga clic:
//        a) Invertir el valor de esOscuro (true -> false, false -> true).
//        b) Llamar a aplicarColorDeFondo().
//        c) Llamar a actualizarEstado().
toggleColorBtn.addEventListener("click", function () {
  // Paso 5.a: invertir el valor de esOscuro.
  // PISTA: esOscuro = !esOscuro;

  // Paso 5.b: aplicar el color correspondiente al nuevo estado.

  // Paso 5.c: actualizar el texto de estado.
});

// 6. Llamar a aplicarColorDeFondo() y actualizarEstado() al inicio
//    para que el estado inicial sea consistente con esOscuro.
aplicarColorDeFondo();
actualizarEstado();
