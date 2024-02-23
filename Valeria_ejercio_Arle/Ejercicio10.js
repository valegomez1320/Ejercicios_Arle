/*
* Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.
*/

let array = [ 1 , 2, 3, true, "arroz", ["hola"]]
let arrayObjeto = {};

array.forEach((elemento, indice) => {
    arrayObjeto[`propiedad${indice + 1}`] = elemento;
  });
  console.log(arrayObjeto);