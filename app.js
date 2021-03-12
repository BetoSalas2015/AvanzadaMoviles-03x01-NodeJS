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

let id = 1;

getEmpleados(id).then( (empleado) => console.log(empleado))
                .catch( (err) => console.log(err));





