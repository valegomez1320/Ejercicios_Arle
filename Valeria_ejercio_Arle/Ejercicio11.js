/**
 *Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
•Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto.
 */
let productos = [ {
    nombre : "Jabón",
    descripcion: "Uso del cuerpo",
    precio: 12000,
    cantidadStock: 24,
    categoria: "Aseo"
}]
//Agregar nuevos productos
let agregarProducto =(nombre,descripcion,precio,cantidadStock,categoria)=> productos.push({nombre, descripcion,precio,cantidadStock,categoria})
agregarProducto("Leche","Para bebés",80000,15,"Infantil");
console.log("----------------------------------------------");
//Listar todos los productos
let listarProductos = productos.forEach(i => console.log(i));

console.log("----------------------------------------------------");
//Buscar por nombre
let encontrarProducto = entrada => productos.filter(i => i.nombre == entrada).forEach(i => console.log(i))
encontrarProducto("Leche");

console.log("_________________________________________________________-");
//Eliminar producto 
let eliminarProducto = entrada => productos.filter( i => i.nombre !== entrada)
eliminarProducto("Jabón");  

console.log("----------------------------------------------------------");
//Actualizar la cantidad en el stock
let actualizarStock = (entrada, cantidad) => productos.filter( i => i.nombre === entrada ? i.cantidadStock = cantidad : false)
actualizarStock("Leche", 2)
console.log(productos[1]);