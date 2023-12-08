// Este programa simula una llamada asincrónica para obtener un usuario

function obtenerUsuario(id) {
    let usuario;

    setTimeout( () => {
        if (id === 1) {
            usuario = { id: 1, nombre: "John Doe"};
        }
        console.log(usuario);
    }, 2000);
    
    return usuario;
}

const usuario = obtenerUsuario(1);
 

/*
El problema es que la función setTimeout invoca la función una vez
pasados los milisegundos indicados como parámetro, por eso 
el console.log(usuario) nos da undefined, porque nos lo imprime antes de asignarle el valor 
a la variable. Pero pasados los 2000 milisegundos a la variable usuario se le asigna correctamente
el valor { id: 1, nombre: "John Doe"}
Para que nos imprima el valor correcto en pantalla he movido el console.log(usuario)
dentro de la función setTimeout().
*/ 