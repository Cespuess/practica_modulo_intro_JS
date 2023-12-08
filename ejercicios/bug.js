const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) { 
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
}

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

/*
El problema estaba en que la condición para ejecutar el bloque
de código era "i <= numeros.length", lo que hacía que en la  
última iteración sumaba un número con un undefined, y esto 
devolvía NaN.
*/