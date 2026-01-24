
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
const listaFiltros = document.getElementById("listaFiltro");
const msjOpcional = document.getElementById("msjOpcional");

const filtrar = () => {
    const textoFiltro = filtro.value.toLowerCase();
    const lista = listaFiltros.getElementsByTagName("li");
    let coincidencias = 0;

    for (let i = 0; i < lista.length; i++) {
        const nombre = lista[i].textContent.toLowerCase();

        if (nombre.includes(textoFiltro)){
            lista[i].style.display = "";
            coincidencias++;
        } else {
            lista[i].style.display = "none";
        }
    }

    if (coincidencias === 0 && textoFiltro !== ""){
        msjOpcional.innerHTML = "No hay coincidencias";
    } else {
        msjOpcional.innerHTML = "";
    }
}
filtro.addEventListener("input", (filtrar));

// EJERCICIO 5
const nombre = document.getElementById("nombre");
const apellidoPaterno = document.getElementById("apellidoPaterno");
const apellidoMaterno = document.getElementById("apellidoMaterno");
const formatear = document.getElementById("formatear");
const resultado = document.getElementById("resultado");

formatear.addEventListener("click", () => {
    const nombreCompleto = `${apellidoPaterno.value} ${apellidoMaterno.value} ${nombre.value} `;
    resultado.innerHTML = nombreCompleto.toUpperCase();
});


// EJERCICIO 6
const numMinutos = document.getElementById("numMinutos");
const tiempoResultado = document.getElementById("tiempoResultado");
const btnConvertir = document.getElementById("btnConvertir");

const convertirMinutos = (totalMinutos) => {
    const minutos = totalMinutos % 60;
    const horas = Math.floor(totalMinutos / 60);
    tiempoResultado.innerHTML = `${horas}h ${minutos}m`;
}

btnConvertir.addEventListener("click", () => {
    const valor = parseInt(numMinutos.value);
    if (valor < 0) {
        alert("Error: Ingresa un numero de minutos valido");
    } else if (!isNaN(valor)){
        convertirMinutos(valor);
    } else {
        alert("Error: Debes ingresar un numero.");
    }
});

// EJERCICIO 7
const email = document.getElementById("email");
const btnValidar = document.getElementById("btnValidar");
const emailResultado = document.getElementById("emailResultado");

btnValidar.addEventListener("click", () => {
    if(email.value === ""){
        emailResultado.innerHTML = "Ingresa un email";
    } else if (!email.value.includes("@")){
        emailResultado.innerHTML = "El email no es valido";
    } else {
        emailResultado.innerHTML = "El email es valido";
    }
})

// EJERCICIO 8
const numProm1 = document.getElementById("numProm1");
const numProm2 = document.getElementById("numProm2");
const numProm3 = document.getElementById("numProm3");
const btnCalcularProm = document.getElementById("btnCalcularProm");
const promResultado = document.getElementById("promResultado");

btnCalcularProm.addEventListener("click", () => {
    const prom = (parseFloat(numProm1.value) + parseFloat(numProm2.value) + parseFloat(numProm3.value)) / 3;

    if (prom > 100 || prom < 0){
        alert("Las calificaciones deben estar entre 0 y 100");
    } else if (prom >= 70) {
        promResultado.innerHTML = prom.toFixed(2) + " (Aprobado)";
    } else if (prom < 70) {
        promResultado.innerHTML = prom.toFixed(2) + " (Reprobado)";
    } else {
        promResultado.innerHTML = "xd";
    }
});


// EJERCICIO 9
const textoConvertir = document.getElementById("textoConvertir");
const btnMayusculas = document.getElementById("btnMayusculas");
const btnMinusculas = document.getElementById("btnMinusculas");
const btnLongitud = document.getElementById("btnLongitud");
const resultadoConvertir = document.getElementById("resultadoConvertir");

btnMayusculas.addEventListener("click", () => {
    resultadoConvertir.innerHTML = textoConvertir.value.toUpperCase();
});

btnMinusculas.addEventListener("click", () => {
    resultadoConvertir.innerHTML = textoConvertir.value.toLowerCase();
});

btnLongitud.addEventListener("click", () => {
    const textoLong = textoConvertir.value.length;
    resultadoConvertir.innerHTML = `Longitud: ${textoLong} caracteres`
});


// EJERCICIO 10
const precio = document.getElementById("precio");
const descuento = document.getElementById("descuento");
const btnCalcularDescuento = document.getElementById("btnCalcularDescuento");
const descuentoResultado = document.getElementById("descuentoResultado");

btnCalcularDescuento.addEventListener("click", () => {
    const precioFinal = precio.value - (precio.value * descuento.value / 100);

    if (precio.value <= 0){
        alert("El precio debe ser mayor a 0");
    } else if (descuento.value > 100 || descuento.value < 0){
        alert("El descuento debe estar entre 0 y 100");
    } else {
        descuentoResultado.innerHTML = `Precio original: ${precio.value}. <br> Descuento: ${descuento.value}% <br> Precio final: ${precioFinal.toFixed(2)}`
    }
})








