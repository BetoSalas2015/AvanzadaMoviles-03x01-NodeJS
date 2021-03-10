// Ejercicio 6 - Problemas con los Callbacks

const empleados = [
    {
        id: 1,
        nombre: "Raúl"
    },
    {
        id: 2,
        nombre: "David"
    },
    {
        id: 3,
        nombre: "Rosa"
    }
];

const salarios = [
    {
        id: 1,
        salario: 500
    },
    {
        id: 2,
        salario: 800
    }
];

getEmpleados = ( id, callback ) => {
    const empleado = empleados.find( (e) =>  e.id === id  );
    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${ id } no existe.`);
    }
    

}

getEmpleados(3, ( err, empleado ) => {
    if(err) {
        console.log("Error!");
        return console.log(err);
    }
    console.log(empleado);
})
