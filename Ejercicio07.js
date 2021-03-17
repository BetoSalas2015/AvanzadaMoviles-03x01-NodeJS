// Ejercicio 7 - Promesas  (Promises)

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

getEmpleados = (id) => {
    const empleado = empleados.find( (e) =>  e.id === id  )?.nombre;

    const promesa = new Promise( (resolve, reject) => {
        empleado ?  resolve(empleado) : reject(`El empleado con id ${ id } no existe.`);
        });
    
    return promesa;
} 

getSalarios = (id) => {
    const salario = salarios.find( e => e.id === id)?.salario;

    const promesa = new Promise( (resolve, reject) => {
        salario ? resolve(salario) : reject(`El empleado con id ${ id } no tiene salario`);
    } );
    return promesa;
}

let id = 3;

getEmpleados(id).then( (empleado) => console.log(empleado))
                .catch( (err) => console.log(err));
getSalarios(id).then( (salario) => console.log(salario))
               .catch( (err) => console.log(err));





