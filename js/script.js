import peliculas from './peliculas.js'

// Intento fallido 1

// let accion = peliculas.filter((accion) => {
//     return peliculas["genre_ids"]=== 28;
// });

// console.log(accion);

// // const accion = Object.groupBy(peliculas, ({"genre_ids"})=> "genre_ids");

// // console.log(accion);

// console.log(peliculas["genre_ids"]);


//  1. Filtras peliculas por genero con su titulo e imagen. 
// 2. Crear nuevas arrais por genero. 

// GENERO ACCION (28)
const genero28 = 28;

const peliculasFiltradas28 = peliculas.filter((pelicula)=>  {
        return pelicula.genre_ids.includes(genero28);
});

const resultado28 = peliculasFiltradas28.map((pelicula) => {
    return {
        título: pelicula.title,
        imagen: pelicula.poster_path,      
    };
});
console.log(resultado28);

// GENERO THRILLER (53)
const genero53 = 53;

const peliculasFiltradas53 = peliculas.filter((peliculas) => {
    return peliculas.genre_ids.includes(genero53);
});

const resultado53 = peliculasFiltradas53.map((pelicula) => {
    return {
        título: pelicula.title,
        imagen: pelicula.poster_path,   
    }
});

console.log(resultado53);

// GENERO AVENTURA (12);
const genero12 = 12;

const peliculasFiltradas12 = peliculas.filter((peliculas) => {
    return peliculas.genre_ids.includes(genero12);
});

const resultado12 = peliculasFiltradas12.map((pelicula) => {
    return {
        título: pelicula.title,
        imagen: pelicula.poster_path, 
    }
});
console.log(resultado12);

// 3. INTEGRAR (2) EN EL DOM. 

// INTEGRAR PELICULAS DE ACCION 
const peliculasDeAccion = document.getElementById("genero-28");

peliculasFiltradas28.forEach((pelicula) => {
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("pelicula");

    const tituloP = document.createElement("p");
    tituloP.textContent = pelicula.title;

    const imagenPel = document.createElement("img");
    imagenPel.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    imagenPel.alt = pelicula.title;

    peliculaDiv.appendChild(tituloP);
    peliculaDiv.appendChild(imagenPel);
    peliculasDeAccion.appendChild(peliculaDiv);
});

// INTEGRAR PELICULAS DE THRILLER

const peliculasDeThriller = document.getElementById("genero-53");

peliculasFiltradas53.forEach((pelicula) => {
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("pelicula");

    const tituloP = document.createElement("p");
    tituloP.textContent = pelicula.title;

    const imagenPel = document.createElement("img");
    imagenPel.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    imagenPel.alt = pelicula.title;

    peliculaDiv.appendChild(tituloP);
    peliculaDiv.appendChild(imagenPel);
    peliculasDeThriller.appendChild(peliculaDiv);
});

// INTEGRAR PELICULAS DE AVENTURA
const peliculasDeAventura = document.getElementById("genero-12");

peliculasFiltradas53.forEach((pelicula) => {
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("pelicula");

    const tituloP = document.createElement("p");
    tituloP.textContent = pelicula.title;

    const imagenPel = document.createElement("img");
    imagenPel.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
    imagenPel.alt = pelicula.title;

    peliculaDiv.appendChild(tituloP);
    peliculaDiv.appendChild(imagenPel);
    peliculasDeAventura.appendChild(peliculaDiv);
});













