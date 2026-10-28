let frutas =  ["uva", "fresa", "manzana", "platano", "mandarina" ]

// 1. Obtener el primer elemento del array
console.log(frutas[0]);

//2. Obtener el último elemento del array
console.log(frutas[4]);

//3. Agregar un elemento al inicio del array
frutas.unshift("arándanos")
console.log(frutas);

//4. Eliminar el primer elemento del array
let borrarPrimero = frutas.shift();
console.log(frutas);

//5. Agregar un elemento al final del array
let agregarUltimo = frutas.push("sandía");
console.log(frutas);

//6. Eliminar el último elemento del array
let eliminarUltimo = frutas.pop();
console.log(frutas);

//7. Combinar dos arrays
let nombres = ["Aintzane", "Lizeth"]
let apellidos = ["Chávarri" , "Vega"]
let mezclados = nombres.concat(apellidos);
console.log(mezclados);

//8. Encontrar si un array incluye un elemento
console.log(frutas.includes("frambuesa"));
console.log(frutas.includes("uva"));

//9. Buscar el índice de un elemento
let colores = ["rojo", "verde", "amarillo", "azul"]
let elemento = "azul"
console.log(colores.indexOf(elemento));

//10. Reemplazar un elemento en un array
// array original:let colores = ["rojo", "verde", "amarillo", "azul"]
colores[2] = "naranja"
console.log(colores);

//11. Sumar todos los elementos del array
let numeros = [1, 2 ,3, 4, 5, 6, 7, 8]
let suma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);
console.log(suma);

let suma2 = numeros.reduce(function(acumulador, num)  {
    return acumulador + num;
}, 25);
console.log(suma2);

//12. Multiplicar todos los elementos del array
let numero2 = [11, 10 , 9, 40, 25]
let multiplicados = numero2.map(function(num) {
    return num * 4;
});
console.log(multiplicados);

//13. Filtrar números mayores a un valor
let numero3 = [20, 21, 45, 78, 1, 3, 97, 4]
let numeroFiltrado = numero3.filter(function(num) { 
    return num > 14;
});
console.log(numeroFiltrado);

//14. Verificar si todos los elementos son mayores a un número
let numeros4 = [1, 30, 39, 29, 10, 13];
let mayorDeNumero = numeros4.every(function(num) {
    return num >=1;
});
console.log(mayorDeNumero);

//15. Obtener el primer elemento que cumple una condición
let numeros5 =  [3, 5, 69, 954, 66, 22, 78, 91]
let primerElemento = numeros5.find (function(num) { 
    return num > 100;
});
console.log(primerElemento);

//16. Imprimir cada elemento del array
let numeros6 =  [2, 5, 55, 74];
numeros6.forEach(function(elemento) {
    console.log(elemento);
});
 
//17. Crear un array con el doble de cada número
let numeros7 = [20, 40, 60, 80];
let dobles = numeros7.map (function(num) {
    return num * 2
});
console.log(dobles);

//18. Convertir un array de nombres en mayúsculas
let nombresguays = ["Maripili", "Constantino", "Hortensia"];
let arrayMayus = nombresguays.map(elemento => elemento.toUpperCase());
console.log(arrayMayus);


    

 

