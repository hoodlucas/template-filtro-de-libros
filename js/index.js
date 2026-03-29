const libros = [{
    titulo: "Cien años de soledad",
    autor:"Gabriel Garcia Marquez",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/100-a%C3%B1os-de-soledad-150x150lifederimagen.jpg"
},{
    titulo: "El señor de las moscas",
    autor:"William Golding",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-se%C3%B1or-de-las-moscaslifederimagen.jpg"
},{
    titulo: "Viaje al centro de la tierra",
    autor:"Julio Verne",
    precio:600,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Viaje-al-centro-de-la-tierra-150x150lifederimagen.jpg"
},
{
    titulo: "Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Don-Quijote-de-la-Mancha-150x150lifederimagen.jpg"
},
{
    titulo: "Moby Dick",
    autor:"Herman Melville",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Moby-Dick-150x150lifederimagen.jpg"
},
{
    titulo: "El viejo y el mar",
    autor:"Ernest Hemingway",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-viejo-y-el-mar-150x150lifederimagen.jpg"
},
{
    titulo: "Veinte mil leguas de viaje submarino",
    autor:"Julio Verne",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/veinte-mil-leguaslifederimagen.jpg"
}];


//Tu codigo JS va acá

const filtrarAutor = (libros, autor) => {

    const librosFiltrados = [];

    for (let i = 0; i < libros.length; i++) {

        if (libros[i].autor === autor ) {

            librosFiltrados.push(libros[i]);
        }        
    }
    return librosFiltrados;
}

// Para probar: console.log(filtrarAutor(libros,'Julio Verne'));


function MostrarFiltrados() {
    // Caputamos el div en donde van a estar los libros y el autor seleccionado
    let contenedor = document.querySelector('#libros')
    let autorSeleccionado = document.querySelector('#autor')


    // Como son varias opciones, seleccionamos el valor específico.
    let valorSeleccionado = autorSeleccionado.value

    // Llamamos a la 1ra función
    let librosFiltrados = filtrarAutor(libros, valorSeleccionado)

    contenedor.innerText = ""

    // Recorremos cada uno de los libros filtrados
    for (let i = 0; i < librosFiltrados.length; i++) {
        var libro = librosFiltrados[i]

        // Sumamos la foto, título, autor y precio por c/u.
        contenedor.innerHTML = contenedor.innerHTML + 
            `<div class="card" style="width: 18rem;">
            <img src="${libro.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${libro.titulo}</h5>
                <p class="card-text">Autor: ${libro.autor}</p>
                <span>Precio: $${libro.precio}</span>
            </div>
            </div>`
    }
}


if (typeof document !== 'undefined') {
    document.getElementById('autor').onchange = MostrarFiltrados;
}

module.exports = { filtrarAutor, libros, MostrarFiltrados };