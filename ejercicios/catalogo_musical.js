// Funciones ----------------------------------
function askOption(){
    let choice = prompt(`Que deseas hacer:\n
                        1) Agregar canción\n
                        2) Listar las canciones\n
                        3) Buscar por género\n
                        4) Calcular el promedio de duración\n
                        5) Salir`);

    while (!options.includes(parseInt(choice))){
            choice = prompt("Tiene que ser un número del 1 al 5: ");
    }
    return choice
}

function Song(name, genre, duration) {
    this.nombre = name;
    this.genero = genre;
    this.duracion = duration;
};

function askGenre() {
    let type = prompt(`Género de la canción:\n
                - ${generosCanciones[0]}\n
                - ${generosCanciones[1]}\n
                - ${generosCanciones[2]}\n
                - ${generosCanciones[3]}\n
                - ${generosCanciones[4]}`)
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

    while (!generosCanciones.includes(type)) {
        alert(`Tiene que ser un género de la lista`);
        type = askGenre();
    }

    return type
}

function askDuration() {
    let time = prompt("Duración de la canción en minutos: ");
    while (isNaN(parseInt(time)) || time % 1 !== 0) {
        alert(`Tiene que ser en minutos.`)
        time = askDuration();
    }
    return parseInt(time);
}


function floatToMinutes(float) { //convertimos el minutos decimal en minutos:segundos
    let minutes = Math.floor(float);
    let seconds = Math.round((float % 1) * 60);

    if (seconds < 10) "0" + seconds;

    return [minutes, seconds];
};

function crearCatalogo() {
    return {
        agregarCancion: (playlist) => {
            let name = prompt("Nombre de la canción: ");
            let genre = askGenre();            
            let duracion = askDuration();
            
            playlist.push(new Song(name, genre, duracion))  
        },
        listarCanciones: (playlist) => {
            if (playlist.length === 0){
                console.log("No hay canciones en tu catálogo.")
            } else {
                playlist.forEach(justifiedMsg);
            }
        },
        buscarPorGenero: (playlist, tipo) => {
            let selectedSongs = playlist.filter(song => song.genero === tipo);
            (selectedSongs.length === 0 ? console.log("No hay canciones de este género en tu catálogo") : selectedSongs.forEach(justifiedMsg));
        },
        calcularPromedioDuracion: (playlist) => {
            if (playlist.length === 0) {
                console.log("Tu catálogo de canciones está vacío.")
            } else {
                let duracionTotal = playlist.reduce((accum, song) => accum + song.duracion,0);
                let average = duracionTotal / playlist.length
                if (average % 1 !== 0){
                    average = floatToMinutes(average)        
                    console.log(`El promedio de duración de las canciones del catálogo es de ${average[0]}:${average[1]} minutos.`)
                } else {
                    console.log(`El promedio de duración de las canciones del catálogo es de ${average} minutos.`)
                }
            }
        }
    };
};

// Constantes ------------------------------------------

const options = [1,2,3,4,5];

const generosCanciones = ["rock", "pop", "reggeaton", "clasica", "techno"];

const justifiedMsg = song => console.log(`Nombre: ${song.nombre.padEnd(20)}\t Género: ${song.genero.padEnd(15)}\t Duración: ${String(song.duracion).padStart(2)} minutos`);

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
}];

// Inicio programa -------------------------------------

let catalogo = [];

    while(true){
        let misOpciones = crearCatalogo();
        opcion = askOption();

        if (opcion ==="1") {
            misOpciones.agregarCancion(catalogo);
        } else if (opcion === "2") {
            misOpciones.listarCanciones(catalogo);
        } else if (opcion === "3") {
            if (catalogo.length === 0){
                console.log("Tu playlist está vacía");
            } else {
                let genero = askGenre();
                misOpciones.buscarPorGenero(catalogo, genero);
            }
        } else if (opcion === "4") {
            misOpciones.calcularPromedioDuracion(catalogo);
        } else {
            break;
        }
}


