// Este programa simula una llamada asincrónica para obtener un usuario

function obtenerUsuario(id) {
    return new Promise ((resolve) => {
        let usuario;    
        setTimeout( () => {
            if (id === 1) {
                resolve(usuario = { id: 1, nombre: "John Doe"});
            }
        }, 2000);
    })
}

obtenerUsuario(1)
    .then((response) => console.log(response))
 
/*
El problema era que no se capturaba la función asíncrona, y por eso siempre el console.log(usuario) devolvía undefined.
*/ 