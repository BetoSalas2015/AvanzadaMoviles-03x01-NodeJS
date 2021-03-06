// Ejercicio 4 - funciones flecha

function sumar(a, b) {
    return a + b;
}

let sumar1 = (a, b) => {
    return a + b;
}

let sumar2 = (a, b) => a + b;

console.log(sumar(4, 6));
console.log(sumar1(4,6));
console.log(sumar2(4,6));