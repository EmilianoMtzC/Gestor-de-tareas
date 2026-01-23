
// EJERCICIO 1
const inputsuma1 = document.getElementById("suma1");
const inputsuma2 = document.getElementById("suma2");
const resultadoSuma = document.getElementById("resultadoSuma");
const botonSuma = document.getElementById("btnSumar");

botonSuma.addEventListener("click", () => {
    const num1 = Number(inputsuma1.value);
    const num2 = Number(inputsuma2.value);

    if (inputsuma1.value.trim() === "" || inputsuma2.value.trim() === "") {
        alert("Ingresa los dos números");

    } else if (isNaN(num1) || isNaN(num2)){
        alert("Los valores deben ser numéricos.");

    } else {
        resultadoSuma.innerHTML = num1 + num2;
    }
});

// EJERCICIO 2
const inputpeso = document.getElementById("pesokg");
const inputaltura = document.getElementById("alturamts");
const resultadoIMC = document.getElementById("resultadoIMC");
const botonIMC = document.getElementById("btnCalcularIMC");

botonIMC.addEventListener("click", () => {
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    const altura2 = Math.pow(altura, 2);
    const IMC = peso / altura2;

    // EASTER EGG
    if (altura > 2.72){
        alert("Diablo bro, no sabia que existían los gigantes");
    } else if (peso >= 500){
        alert("Oye, creo que en este punto el IMC no importa. \n\nChecate bro. ")
    }

    // FUNCIONAMIENTO
    if (IMC < 18.5){
        resultadoIMC.innerHTML = "Resultado: " + IMC.toFixed(2) + "<br> Indicador: Bajo peso.";
    } else if (IMC >= 18.5 && IMC <= 24.9){
        resultadoIMC.innerHTML = "Resultado: " + IMC.toFixed(2) + "<br> Indicador: Normal.";
    } else if (IMC >= 25 && IMC <= 29.9){
        resultadoIMC.innerHTML = "Resultado: " + IMC.toFixed(2) + "<br> Indicador: Sobrepeso.";
    } else if (IMC >= 30){
        resultadoIMC.innerHTML = "Resultado: " + IMC.toFixed(2) + "<br> Indicador: Obesidad.";
    }
})

// EJERCICIO 3
const msj = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const alerta = document.getElementById("alerta");

const actualizarContador = () => {
    contador.innerHTML = msj.value.length;
    if (msj.value.length < 100){
        alerta.innerHTML = "";
    } else if (msj.value.length >= 100) {
        alerta.innerHTML = "Limite alcanzado";
    }
};

msj.addEventListener("input", actualizarContador);

// EJERCICIO 4
const filtro = document.getElementById("filtro");
const listaFiltros = document.getElementById("listaFiltros");
const msjOpcional = document.getElementById("msjOpcional");

const filtrar = () => {

}

filtro.addEventListener("input", (filtrar));




