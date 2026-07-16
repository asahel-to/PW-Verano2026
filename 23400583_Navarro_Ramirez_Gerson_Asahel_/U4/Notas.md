console.log("------------tipo de dato--------------------------")

console.log(typeof (10))
console.log(typeof ("holaa"))
console.log(typeof (true))
console.log(typeof ({}))

console.log("------------operador ternario--------------------------")


const edad = 17;
const mensaje = edad >= 18 ?"mayor de edad" :"menor de edad" ;
console.log(mensaje);

console.log("------------valores indefinidos/existentes--------------------------")

const estudiante = { nombre: "pedro" }
console.log(estudiante.edad)
console.log(estudiante.edad ?? "sin edad")

console.log("------------operadores logicos--------------------------")

let nombre = "";
console.log(nombre || "inivtados")

let edad2 = 12;
edad2 >= 18 && console.log("puede entrar");

let alumno = {
    nombre1: "juan",
    edad3: 20,
    carrera: "ISC"
}
delete alumno.edad3;
console.log("nombre" in alumno);
console.log("edad" in alumno);

console.log("------------arrays--------------------------")

const numeros = [1, 2, 3];
const copia = [...numeros];

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];


const productos = [
    { nombre: "laptop", precio: 15000, categoria: "Electronica" },
    { nombre: "Celular", precio: 2900, categoria: "Telefonía" },
    { nombre: "TV", precio: 6000, categoria: "Electronica" },
    { nombre: "Moto", precio: 28000, categoria: "Transporte" },

];
const caros = productos.filter(p => p.precio > 10000);
const nombress = productos.map(p => p.nombre);
const total = productos.reduce((suma, p) => { return suma + p.precio }, 0);
console.log(" Total: "+total)
