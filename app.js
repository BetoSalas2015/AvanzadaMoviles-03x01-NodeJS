// Ejercicio 12 - exportar modulos 

const { crearArchivo } = require('./js/tablas.js');

let base = 6;

crearArchivo(base)
            .then( ( nombreArchivo ) => console.log(`Archivo ${nombreArchivo} creado`.blue))
            .catch( (err) => console.log(err) );

