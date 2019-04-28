// Tenemos un listado de productos

const productos = [
    { nombre: "SWEATER ALANIS ROSA - $3.800", tipo: "sweater", color: "rosa", img: "./sweater-rosa.jpg" },
    { nombre: "SWEATER ALANIS AMARILLO - $3.800", tipo: "sweater", color: "amarillo", img: "./sweater-amarillo.jpg" },
    { nombre: "SWEATER ALANIS AZUL - $3.800", tipo: "sweater", color: "azul", img: "./sweater-azul.jpg" },
    { nombre: "CAMPERA ELIXIR ROSA - $3.790", tipo: "campera", color: "rosa", img: "./campera-rosa.jpg" },
    { nombre: "CAMPERA ELIXIR AMARILLA - $3.790", tipo: "campera", color: "amarillo", img: "./campera-amarillo.jpg" },
    { nombre: "CAMPERA ELIXIR ROSA - $3.790 ", tipo: "campera", color: "naranja", img: "./campera-naranja.jpg" }
]


// Seleccionamos el listado apenas empezamos, porque
// queremos tener esta variable disponible en todo nuestro codigo
const listado = document.getElementById("lista-de-productos")



// Para mostrarlos, recorremos el listado con un for 
for (let i = 0; i < productos.length; i++) {
    // Creamos un div, le añadimos el nombre y la imagen 
    const div = document.createElement("div")
    div.classList.add("producto")

    const titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productos[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(imagen)
    div.appendChild(titulo)

    // Agregamos el div al listado 
    listado.appendChild(div)
}


const botonDeFiltro = document.querySelector("button")

botonDeFiltro.onclick = function () {

    // primero, recorremos con un while todos los "hijos" del listado
    // y los borramos

    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    }

    // despues les toca a uds el resto :)

}


// Tarea: 
// Si el usuario escribe "zapato", mostrar los zapatos
// Si el usuario escribe "bota", mostrar las botas
// Si el usuario escribe "negro", mostrar el zapato y la bota negros
// Si el usuario escribe "azul", mostrar el zapato y la bota azules


// Para puntos extra:
// Dejar la pagina mas linda con CSS 

const placeholder = document.getElementById("placeholder");


// Armo las funciones para filtrar

// Por modelo

const filtroPorModelo = () => {
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    };
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].tipo === placeholder.value) {
            const div = document.createElement("div")
            div.classList.add("producto")

            const titulo = document.createElement("p")
            titulo.classList.add("titulo")
            titulo.textContent = productos[i].nombre

            const imagen = document.createElement("img");
            imagen.setAttribute('src', productos[i].img);

            div.appendChild(imagen)
            div.appendChild(titulo)

            // Agregamos el div al listado 
            listado.appendChild(div)
        }
    }
};

// Por color color

const filtroPorColor = () => {
    while (listado.firstChild) {
        listado.removeChild(listado.firstChild);
    };
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].color === placeholder.value) {
            const div = document.createElement("div")
            div.classList.add("producto")

            const titulo = document.createElement("p")
            titulo.classList.add("titulo")
            titulo.textContent = productos[i].nombre

            const imagen = document.createElement("img");
            imagen.setAttribute('src', productos[i].img);

            div.appendChild(imagen)
            div.appendChild(titulo)

            // Agregamos el div al listado 
            listado.appendChild(div)
        }
    }
}

// Armo el condicional para que valide el texto ingresado

botonDeFiltro.onclick = function (event) {
    console.log(placeholder.value)
    event.preventDefault();
    if (placeholder.value === "campera" || placeholder.value === "sweater") {
        filtroPorModelo();
    } else if (placeholder.value === "azul" || placeholder.value === "amarillo" || placeholder.value === "rosa" || placeholder.value === "naranja") {
        filtroPorColor();
    }
}