////**Iteración #1: Usa includes**////
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .***includes*** de javascript.*

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function buscadorCamiseta() {
for (let product of products) {
    
    if (product.includes("Camiseta")){
        console.log(product)
    }
} 
}
buscadorCamiseta() //Aunque la función me funciona y cumple su funcion (valga la redundancia) me gustaría saber como mandar elementos de un array a otro array vacio. He intentado resolver el problema así pero no lo saco.

//Versión 2 del ejercicio, usando ternario// 
function tshirtSearcher() {
    console.log('Lista de camisetas: ')
    for (let product of products){
        product.includes("Camiseta") ? console.log(product) : null
    }
}
tshirtSearcher()


////Iteración #2: Condicionales avanzados////
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved 
//a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
//Para poder recorrer un array con objetos deberás, recorrerlo con un array y por cada posición añadir una nueva propiedad a cada objeto.
// Pista: ( para añadir la propiedad dentro del objeto )
//A la hora de recorrer un array y poder meter en el objeto una nueva propiedad
//deberás asignar a ese array por indice una propiedad tal que así
//nombreLista[indice].nombrePropiedad = valor;

// objeto.isApproved =true


// //donde objeto es el objeto que recorremos (cada alumno en nuestro caso)

// //isApproved --- es la propiedad queremos definir o modificar 

// // true ---- es el valor que le asignamos a la propiedad 


// /////---------Ejemplo-----------

// colegios = [
//     {name: 'Pilarica', Clase1: 100, Clase1: 80, Clase1: 10}, 
// 		{name: 'Lorica', Clase1: 89, Clase1: 50, Clase1: 40},	
// ]

// /* recorremos el array de objetos con un forEach para quedarnos en cada uno
// de los elementos*/

// colegios.forEach((colegios)=>{
// 	//le añadimos la propiedad nueva llamada "pintada" y el valor = true
// 	colegios.pintada = true;
// })

// console.log(colegios);

// // -------- CONSOLE--------------

// { name: 'Pilarica', Clase1: 10, pintada: true },
// { name: 'Lorica', Clase1: 40, pintada: true }



const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function checkAprobado () {
    for (let i = 0; i < alumns.length; i++) {
           const estudiante = alumns[i]
           if (estudiante.T1 == true || estudiante.T2 == true && estudiante.T3 == true) {
             console.log(estudiante.name + " esta aprobado")
           } else {
            console.log(estudiante.name + " esta suspendido")
           }
         }     
        }

checkAprobado() //Ejercicio superado, pero merece ser revisado porque no estoy seguro de si lo he hecho bien. En la linea 79 me habría gustado haber encontrado
//una manera de expresar 'Si T1 && T2 && T3 son mayormente true', pero no sé como. He probado a escribir 'estudiante.T1 && estudiante.T2 && estudiante.T3 == true' pensando que
//javascript lo leería como 'si almenos hay mayoria de true' pero no ha funcionado. 

//Version 2//

function comprobarAprobado () {
    for (let i = 0; i < alumns.length; i++) {
        const estudiante = alumns[i]
        estudiante.T1 == true || estudiante.T2 == true && estudiante.T3 == true ? console.log(estudiante.name + ' ha aprobado') : console.log(estudiante.name + ' ha suspendido')
    }
}
comprobarAprobado() //Resuelto//

////**Iteración #3: Proba**Iteración #3: Probando For...of**////
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
// Puedes usar este array:
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (paises of placesToTravel) {
    console.log(paises)
}

//Version 2, usando solo el for//
for (i=0; i<placesToTravel.length; i++){
    console.log(placesToTravel[i])
}

//Resuelto//

////**Iteración #4: Probando For...in**////
//Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (key in alien){
    console.log(alien[key])
}
//Resuelto

//Version 2//

for (key in alien){
    
    console.log(`El especimen ${alien.name} tiene los siguientes atributos... ${key} : ${alien[key]}`)
} 
//Resuelto

////**Iteración #5: Probando For**

//Usa un bucle **for** para recorrer todos los destinos del array 
//y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel1 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

function editorPlaces() {
    for (i=0; i<placesToTravel1.length; i++){
        const place = placesToTravel1[i]
        //if (place.id === 4 || place.id === 11 || place.id === 23 || place.id === 44 || place.id === 59) {
        if (place.id !== 11 && place.id !== 40)  {   //Mejor expresado de esta manera, es mas breve y funciona. 
        console.log(place)
        }
        
    }
}

editorPlaces() //Ejercicio resuelto a medias... He conseguido que el console.log muestre todos los paises sin los id de 11 y 40, pero porque los he filtrado. No sé como eleminarlos del array original. 


////**Iteración #6: Mixed For...of e includes**////
//Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]


//////Ejercicio 8 de es6///////
//     6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

function gameSearcher() {
    for(i=0; i<videogames.length; i++){
        const videogame = videogames[i]
        for (genders in videogame){
            //const genders = videogame.genders  // Este const sobra. 
            if (videogame.genders.includes('RPG')) {
                console.log(videogame.name)
            } 
        }
    }
}

gameSearcher()