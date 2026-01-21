// 1. Declarar una variable para llevar el conteo
//    PISTA: empieza en 0.
let count = 0;

// 2. Seleccionar los elementos del DOM que vas a manipular:
//    - El elemento donde se muestra el número (countDisplay)
//    - El botón de incrementar (incrementBtn)
//    - El botón de reiniciar (resetBtn)

const countDisplay = document.getElementById("countDisplay");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// 3. Crear una función que ACTUALICE el texto del contador en el DOM.
//    PISTA: esta función debe tomar el valor actual de `count` y
//    asignarlo al textContent de `countDisplay`.

function actualizarDisplay() {
  // Ejemplo de lo que deberías hacer aquí:
  // countDisplay.textContent = ...;
}

// 4. Agregar un "listener" de clic al botón de incrementar.
//    Cuando el usuario haga clic:
//      a) Incrementa la variable `count` en 1
//      b) Llama a la función `actualizarDisplay()` para reflejar el cambio.

incrementBtn.addEventListener("click", function () {
  // Paso 4.a: incrementar count
  // count = ...;

  // Paso 4.b: actualizar el contenido en el DOM
  // actualizarDisplay();
});

// 5. Agregar un "listener" de clic al botón de reiniciar.
//    Cuando se haga clic en "Reiniciar":
//      a) Pon la variable `count` en 0
//      b) Llama a `actualizarDisplay()` para mostrar el 0 en pantalla.

resetBtn.addEventListener("click", function () {
  // Paso 5.a: poner count en 0
  // count = 0;

  // Paso 5.b: actualizar el display
  // actualizarDisplay();
});

// 6. (Opcional pero recomendable) Llamar a `actualizarDisplay()` al inicio
//    para asegurarte de que el DOM muestre el valor correcto desde el principio.
// actualizarDisplay();
