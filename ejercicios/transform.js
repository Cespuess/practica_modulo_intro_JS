const datos = [
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["JavaScript", "HTML", "CSS"],
        proyectos: [
            {id: 1, nombre: "Proyecto 1"},
            {id: 2, nombre: "Proyecto 2"}
        ]
    },
    {
        id: 2,
        nombre: "María",
        habilidades: ["Python", "SQL", "Django"],
        proyectos: [
            {id: 3, nombre: "Proyecto 3"},
            {id: 4, nombre: "Proyecto 4"}
        ]
    },
    {
        id: 3,
        nombre: "Pedro",
        habilidades: ["Java", "Spring", "Hibernate"],
        proyectos: [
            {id: 5, nombre: "Proyecto 5"},
            {id: 6, nombre: "Proyecto 6"}
        ]
    }
];


// Desarrolladores con JavaScript -------------------------------------
function devJS(devs, skill){
    //recibe la lista con los desarrolladores y la habilidad y devuelve una lista con los desarrolladores que cumplan con esa habilidad.
    let developers = devs.filter(dev => dev.habilidades.includes(skill));
    return developers;
}

let desarrolladoresJavascript = devJS(datos, "JavaScript");
console.log(desarrolladoresJavascript);

// Listado proyecto de los Devs--------------------------------------------
// con .map()
let projectsMap = [];
for (let i = 0; i < datos.length; i++) {
    let projectName = datos[i].proyectos.map(pro =>pro.nombre)
        projectsMap = projectsMap.concat(projectName)       
}
console.log(projectsMap)

// con for
const projects = []
for (let i = 0; i < datos.length; i++) {
    for (let j = 0; j < datos[i].proyectos.length; j++) {
        const projectName = datos[i].proyectos[j].nombre;
        projects.push(projectName)        
    }
}
console.log(projects)