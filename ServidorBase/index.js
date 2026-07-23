

const PORT = 3000;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//INICIALIZAR V///////////////////////////////////////////////////////////////
let peliculas = [
    {
        id: 1,
        titulo: "intelestelar",
        director: "Christopher Nolan",
        año: 2014
    },
     {
        id: 2,
        titulo: "Jurassic Park",
        director: "Steven Spilverd",
        año: 2014
    },
     {
        id: 3,
        titulo: "Avengers",
        director: "Hermanso Rusos",
        año: 2014
    }
]

let idActual = peliculas.length +1;

app.get("/peliculas", (req, res) => {
    res.json(peliculas);
});

app.post("/peliculas", (req,res) =>{
    const { titulo, director, año }= req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        })
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});
// Actualizar una película
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const { titulo, director, año } = req.body;
    if (!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la película"
        });
    }

    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );
    if (indice === -1) {
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        });
    };

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
});
//eliminar
app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );
    if (indice === -1) {
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        });
    }
    const peliculaEliminada = peliculas[indice];
    peliculas.splice(indice, 1);

    res.json({
        mensaje: "pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});



// RUTAS ----------------------------------------------------------------------------------
app.get("/", (req,res) => {
    res.send("Bienvenido a mi primer servidor con express");
});
app.get("/pagina",(req, res) =>{
    res.send(`
       
        <h1> Mi página</h1>
        <p> Creada con express</p> 
        `);
});

app.get("/saludo/:nombre", (req, res)=> {
    const nombre = req.params.nombre;
    res.send("hola " + nombre)
});
//ejercicio 1
app.get("/ParImpar/:numero", (req, res)=> {
        const numero = req.params.numero;
    
  
        if(numero % 2 == 0){
         res.send(numero +" es par");
        }else{
             res.send(numero + " es inpar");
        }
    
});
//ejercicio 2
app.get("/edad/:edad", (req, res)=> {
    const edad = req.params.edad;
    if (edad >= 18) {
         res.send("eres mayor de edad ")
    }else{
        res.send("eres menor de edad ")
    }
    
});
//ejercicio 3
app.get("/calculadora/:op/:a/:b", (req, res) => {
    const op = req.params.op;
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    let result = 0; // Se corrigió la declaración aquí

    switch (op) {
        case "sum":
            result = a + b;
            break;
        case "rest":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = a / b;
            break;
        default: 
            return res.status(400).send("No es correcta tu operación");
    }
    
    res.send("El resultado es: " + result);
});
//Ejercicio 4. Tabla de multiplicar
app.get("/tabla/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    const tabla = [];

    for (let i = 1; i <= 10; i++) {
        tabla.push(numero+"x"+i+"="+numero * i);
    }


    res.json(tabla);
});
//Ejercicio 5. Calificacion
app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);

    if (nota >= 90) {
        res.send("Nota: "+nota+ " Excelente");
    } else if (nota >= 80) {
        res.send("Nota: "+nota+" Muy Bien");
    } else if (nota >= 70) {
        res.send("Nota: "+nota+" Aprobado");
    } else {
        res.send("Nota: " +nota+" Reprobado");
    }
});


//iniciando servidor ----------------------------------------------------------------------------------------

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});