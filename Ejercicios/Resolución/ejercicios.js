
// 1. Suma de dos numeros.
function suma(a, b){
    console.log(a+b);
}

suma(10,2);

// 2. Número par o impar.

function esPar(numeroEntero){
    if (numeroEntero % 2 === 0) {
        console.log(numeroEntero + " = True")
    } else {
        console.log(numeroEntero + " = False")
    }
}
esPar(10);

// 3. Máximo de tres números.

function maxDeTres(a,b,c){
    return console.log(Math.max(a,b,c));
}

maxDeTres(3,15,9);

// 4. Reverso de una cadena.
function reversoCadena(texto){
    console.log(texto.split("").reverse().join(""));
}

reversoCadena("hola");

// 5. Contar vocales en una cadena.

function contarVocales(texto){
    console.log(texto.match(/[aeiou]/g).length);
}

contarVocales("Programar es genial");

// 6. Eliminar duplicados de una arreglo.

function sinDuplicado(arr){
    console.log()
}

