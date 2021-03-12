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
    const empleado = empleados.find( (e) =>  e.id === id  )?.nombre;
    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${ id } no existe.`);
    }  
}

getSalarios  = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;
    if(salario) {
        callback(null, salario);
    } else {
        callback(`El empldeado con id ${ id } no existe`);
    } 
}

let id = 1;

getEmpleados(id, ( err, empleado ) => {
    if(err) {
        console.log("Error!");
        return console.log(err);
    }
    //console.log(empleado);

    getSalarios(id, (err, salario) => {
        if (err) {
            console.log("Error!!");
            return console.log(err);
        }
        console.log("El empleado ", empleado, " tiene un salario ", salario);
    });

});



