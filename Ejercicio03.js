// Ejercicio 3 - Demostrar el uso de string templates (Plantillas de texto)

var a = 5;
var b = 10;

console.log("Versión concatenada: ");

console.log("Quince es " + (a + b) + " y no " + (2 * a + b) + "." );

console.log("Versión cadena literal:");

console.log( `Quince es ${ a + b} y no ${ 2 * a + b } .` );

