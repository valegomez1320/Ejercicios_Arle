//Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
let elementos = [1, 4, 7, 0, "Emiliano", "Juan", "Gigo", true, false, 10];
//Busca un elemento específico en el array por su valor.
let encontrado = elementos.find( i => i === "Emiliano");
console.log(encontrado);
//Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
elementos.indexOf("Emiliano") !== -1 ? console.log(elementos.indexOf("Emiliano") ) : console.log("No encontrado");