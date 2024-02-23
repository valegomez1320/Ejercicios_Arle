//Crea un array con nombres de personas y sus edades.
let personas = [
    {
        nombre: "Itsa",
        edad: 22
    },
    {
        nombre: "Sofi",
         edad: 15
    }
]
//Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
let nombreMayoresEdad = personas.filter( i => i.edad >=18 ?  i.nombre  : false);
//Imprime los nombres de las personas que cumplen con el criterio.
console.log(nombreMayoresEdad);
//Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un mensaje).
for (let i = 0; i < nombreMayoresEdad.length; i++) {
   console.log(`La persona llamada ${nombreMayoresEdad[i].nombre} tiene una edad de ${nombreMayoresEdad[i].edad} años significa que es mayor de edad`);
}