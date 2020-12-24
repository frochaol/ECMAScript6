// -- ES 10 MANEJO DE MATRICES

// FUNCIÓN FLAT
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3));  // valor sobre la profundidad del que quieres trabajar
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])); // Se usa para mostrar información de manera más específica.

// -- MÉTODO DE TRIM
let hello = '                    hello World';
console.log(hello);
console.log(hello.trimStart());

// TRIM AL FINAL
let hello = 'Hello         ';
console.log(hello);
console.log(hello.trimEnd());

// OPTIONAL CATCH BINDING
// antes
try {
    
} catch (error) {
    
}
// ahora
try {
    
} catch {
    error
}

// FROM ENTRIES - TRANSFORMA CLAVE VALOR DE ELEMENTOS DE UN ARREGLO A UN OBJETO
let entries = [["name", "fernando"], ["age", 28] ];
console.log(Object.fromEntries(entries));   // { name: 'fernando', age: 28 }

// OBJETO DE TIPO SIMBOLO QUE PERMITE ACCEDER A UNA DESCRIPCIÓN
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);