// Funciones ----------------------------------

function Song(name, genre, duration) {
    this.nombre = name;
    this.genero = genre;
    this.duracion = duration;
};


function agregarCancion(playlist) {
    let name = prompt("Nombre de la canción: ");
    let genre = prompt("Género de la canción: ").toLowerCase();
    let duracion = parseFloat(prompt("Duración de la canción en minutos: "));
    
    playlist.push(new Song(name, genre, duracion))
}

function listarCanciones(playlist) {
    if (playlist.length === 0){
        console.log("No hay canciones en tu catálogo.")
    } else {
        playlist.forEach(song => console.log(`Nombre: ${song.nombre}\t Género: ${song.genero}\t Duración: ${song.duracion} minutos`));
    }
}

function buscarPorGenero(playlist, tipo) {
    if (playlist.length === 0) {
        console.log("Tu catálogo está vacío.");
    } else {
        let selectedSongs = playlist.filter(song => song.genero === tipo);
        selectedSongs.forEach(song => console.log(`Nombre: ${song.nombre}\t Género: ${song.genero}\t Duración: ${song.duracion} minutos`));
    }
}

function calcularPromedioDuracion(playlist) {
    if (playlist.length === 0) {
        console.log("Tu catálogo de canciones está vacío.")
    } else {
        let duracionTotal = playlist.reduce((accum, song) => accum + song.duracion,0);
        let average = floatToMinutes(duracionTotal / playlist.length)
        console.log(`El promedio de duración de las canciones del catálogo es de ${average[0]}:${average[1]} minutos.`)
    }
}

function floatToMinutes(float) {
    let minutes = Math.floor(float);
    let seconds = Math.round((float % 1) * 60);

    if (seconds < 10) "0" + seconds;

    return [minutes, seconds];
}

function crearCatalogo() {
    return {
        agregarCancion: agregarCancion,
        listarCanciones: listarCanciones,
        buscarPorGenero: buscarPorGenero,
        calcularPromedioDuracion: calcularPromedioDuracion
    };
};

// Constantes ------------------------------------------

const options = [1,2,3,4,5];

const generosCanciones = ["rock", "pop", "reggeaton", "clásica", "techno"]

const listaPrueba = [{
    "nombre": "waka",
    "genero": "pop",
    "duracion": 4
},
{
    "nombre": "teah",
    "genero": "rock",
    "duracion": 6
},
{
    "nombre": "dice",
    "genero": "pop",
    "duracion": 5
},
{
    "nombre": "papichulo",
    "genero": "reggeaton",
    "duracion": 3
},
{
    "nombre": "la raja de tu falda",
    "genero": "pop",
    "duracion": 7
}]

// Inicio programa -------------------------------------

let catalogo = [];

    while(true){
        let misOpciones = crearCatalogo();
        console.log(catalogo);
        opcion = prompt(`Que deseas hacer:\n
                        1) Agregar canción\n
                        2) Listar las canciones\n
                        3) Buscar por género\n
                        4) Calcular el promedio de duración\n
                        5) Salir`);

        while (!options.includes(parseInt(opcion))){
            opcion = prompt("Tiene que ser un número del 1 al 5: ");
        }

        if (opcion ==="1") {
            misOpciones.agregarCancion(catalogo);
        } else if (opcion === "2") {
            misOpciones.listarCanciones(catalogo);
        } else if (opcion === "3") {
            let genero = prompt(`Que género quieres buscar:\n
                                - ${generosCanciones[0]}\n
                                - ${generosCanciones[1]}\n
                                - ${generosCanciones[2]}\n
                                - ${generosCanciones[3]}\n
                                - ${generosCanciones[4]}`);
            while (!generosCanciones.includes(genero)) {
                genero = prompt(`Tiene que ser un género de la lista:`)
            }
            misOpciones.buscarPorGenero(catalogo, genero);
        } else if (opcion === "4") {
            misOpciones.calcularPromedioDuracion(catalogo);
        } else {
            break;
        }
        console.log(catalogo);

}


