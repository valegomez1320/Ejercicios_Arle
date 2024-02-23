//Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
let propiedades = [
    {
        color: "azul",
        tamaño: 12,
        tipo: "cocina"
    },
    {
        color: "gris",
        tamaño: 4,
        tipo: "baño"
    },
    {
        color: "naranja",
        tamaño: 10,
        tipo: "baño"
    }
];
function agruparPorPropiedad(array, propiedad) {
    return array.reduce((resultado, objeto) => {
     
      let valorPropiedad = objeto[propiedad];
  
      if (!resultado.has(valorPropiedad)) {
        resultado.set(valorPropiedad, []);
      }
      resultado.get(valorPropiedad).push(objeto);
  
      return resultado;
    }, new Map());
  }
  
  let objetosAgrupadosPorColor = agruparPorPropiedad(propiedades, 'color');
  
  objetosAgrupadosPorColor.forEach((value, key) => {
    console.log(`Color: ${key}`);
    console.log(value);
  });