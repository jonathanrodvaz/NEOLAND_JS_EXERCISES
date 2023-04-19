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
buscadorCamiseta() 

//Versión 2 del ejercicio, usando ternario// 
function tshirtSearcher() {
    console.log('Lista de camisetas: ')
    for (let product of products){
        product.includes("Camiseta") ? console.log(product) : null
    }
}
tshirtSearcher()