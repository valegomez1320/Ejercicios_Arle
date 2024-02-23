//• Crea un array con elementos duplicados.
let duplicados = [6, 7, 8, 8, "J", "S", "J"]
//Elimina los elementos duplicados del array.
let sinDuplicados = []
duplicados.forEach( i => !sinDuplicados.includes(i) ? sinDuplicados.push(i) : false)
console.log(sinDuplicados);







// for (let i = 0; i < duplicados.length; i++) {
//     if(!sinDuplicados.includes(duplicados[i])){
//         sinDuplicados.push(duplicados[i])
//     }
// }
// console.log(sinDuplicados);