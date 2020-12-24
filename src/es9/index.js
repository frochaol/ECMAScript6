// -- ES9

// OPERADOR DE REPOSO - EXTRAE PROPIEDADES DE UN OBJETO QUE AÚN NO SE A CONSTRUIDO
const obj = {
    name: 'fernando',
    age: 28,
    country: 'PE',
};

let {
    name,  ...all
} = obj;
console.log(name, all);

// AÑADIR PROPIEDADES DE OBJETOS A UN NUEVO OBJETO - OPERADOR DE PROPAGACIÓN
const obj = {
    name: 'Fernando',
    age: 28,
}

const obj1 = {
    ...obj,
    country: 'PE',
}
console.log(obj1);

// -- PROMISE . FINALLY - cuando terminó el llamado
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    });
};

helloWorld()
    .then( response => console.log(response))
    .catch( error => console.log(error))
    .finally(() => console.log('Finalizó')); // Se agrega esta función para darle lógica cuando se finalizó el Promise

// -- Cómo se agrupa bloques del regex en es9
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);