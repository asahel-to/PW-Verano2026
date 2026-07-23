

const API_URL = "https://api-peliculas-nu.vercel.app/peliculas";

const formulario = document.getElementById("form");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

let peliculas = [];

mostrarPeliculas();

async function mostrarPeliculas() {
    const respuesta = await fetch(API_URL);

    peliculas = await respuesta.json();

    tabla.innerHTML = "";

    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
            <tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.director}</td>
                <td>${pelicula.año}</td>
                <td>
                    <button id="editar" onclick="editar(${pelicula.id})">
                        Editar
                    </button>

                    <button id="eliminar" onclick="eliminar(${pelicula.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pelicula = {
        titulo: titulo.value,
        director: director.value,
        año: Number(año.value)
    };

    if (id.value === "") {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });
    } else {
        await fetch(`${API_URL}/${id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });
    }

    formulario.reset();
    id.value = "";

    await mostrarPeliculas();
});

function editar(idPelicula) {
    const pelicula = peliculas.find(
        (pelicula) => pelicula.id === idPelicula
    );

    if (!pelicula) {
        return;
    }

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

async function eliminar(idPelicula) {
    await fetch(`${API_URL}/${idPelicula}`, {
        method: "DELETE"
    });

    await mostrarPeliculas();
}


/*let peliculas =[];
let siguienteId = 1;

const formulario = document.getElementById("form");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const year = document.getElementById("year");
const Tabla = document.getElementById("tablaPeliculas");

function mostrarPeliculas(){
    Tabla.innerHTML ="";
    peliculas.forEach((pelicula) => {
        Tabla.innerHTML += `
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.director}</td>
            <td>${pelicula.year}</td>
            <td>
                <button id="bot" onclick="editar(${pelicula.id})">
                    Editar
                </button>
                <button id="bot2" onclick="eliminar(${pelicula.id})">
                    Eliminar
                </button>
            </td>
        </tr>
        
        `;
            
        
    });
}


formulario.addEventListener("submit", (e) => 
    {e.preventDefault() 
    if (id.value =="") {
        peliculas.push({
            id: siguienteId++,
            titulo: titulo.value,
            director: director.value,
            year: Number(year.value)
        });
    } else {
        const pelicula = peliculas.find(p => p.id == id.value)
        pelicula.titulo = titulo.value;
        pelicula.director = director.value;
        pelicula.year = year.value;
    }
    formulario.reset();
    id.value = "";
    console.log(peliculas)
    mostrarPeliculas();
});

function editar(idPelicula){
    const pelicula = peliculas.find(p => p.id == idPelicula);
    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    year.value = pelicula.year;
}

function eliminar(idPelicula){
    peliculas = peliculas.filter(p => p.id != idPelicula);
   mostrarPeliculas();
}*/