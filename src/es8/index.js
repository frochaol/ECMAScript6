// -- ES8 ASYNC Y AWAIT

// Transformar este objeto a una matriz 
const data = {
    frontend: 'Fernando',
    backend: 'Oscar',
    design: 'Ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);    // -- Se añade tambien obtener la cantidad de registros dentro del objeto

// -- object values, devuelve valores de un objeto a un arreglo
const data = {
    frontend: 'Fernando',
    backend: 'Oscar',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// -- Se añadió también el padding (Concatena texto antes de otro texto)
const string = 'Hola';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));

// -- Trailing comas
const obj = {
    name: 'fernando',   // -- Se agrega a partir de ahora si después de la coma no hay otro valor no genera ningún error.
}