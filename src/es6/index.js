//  PARAMETROS
// -- Versión anterior
function newFunction(name, age, country) {
    var name = name || 'fernando';
    var age = age || 28;
    var country = country || 'PE';
    console.log(name, age, country);
}
// -- Versión ES6
function newFunction2(name = 'fernando', age = 28, country = 'PE') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('oscar', '32', 'MX')

// LITERALES
// -- Versión anterior
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// -- Versión ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// MULTILINEAS
// -- Versión anterior
let lorem = "Este texto es super rápido para probar el curso \n" 
+ "Otra frase necesitada.";
// -- Versión ES6
let lorem2 = `primera frase épica
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

// DESESTRUCTURACION
// -- Versión anterior
let person = {
    'name': 'fernando',
    'age': 28,
    'country': 'PE'
}
console.log(person.name, person.age, person.country);
// -- Versión ES6
let { name, age, country } = person;
console.log(name, age, country);

// SPREAD OPERATOR - Agregar datos a un arreglo
// -- Versión anterior
let team1 = ['Fernando', 'Oscar', 'Julian'];
let team2 = ['Valeria', 'Yessica', 'Camila'];
// -- Versión ES6
let education = ['David', ...team1, ...team2];
console.log(education);

// -- Utilización de LET - trabaja con elementos que se almacenan en memoria.
{
    var globalVar = "Global Var";   // -- Utilizado para el scope global
}
{
    let globalLet = "Global Let";   // -- Solo se usa dentro del scope local
    console.log(globalLet);
}
console.log (globalVar);

// -- Utilización de CONST - Establece una variable, NO PUEDE CAMBIAR SU VALOR
const a = 'B';
a = 'A';

// OBJETOS
let name = 'Fernando';
let age = 28;
// -- Versión anterior
obj = { name: name, age:age};
// -- Versión ES6
obj2 = {name, age};
console.log(obj2);

// ARROW FUNCTIONS
const names = [
    {name: 'fernando', age: 28},
    {name: 'Yessica', age: 26}
]
// -- Versión anterior
let listOfNames = names.map( function(item) {
    console.log(item.name);
})
// -- Versión ES6 Varias formas
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age) => {
    //-- Código
};
const listOfNames4 = name => {
    // -- Código
};
const square = num => num * num;

// PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Se resuelve la promesa');
        } else {
            reject('Salió mal');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


// CLASES
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
};

const calc = new calculator();
console.log(calc.sum(2,5));

// MÓDULOS
import  hello  from './module';

hello();

// GENERATORS
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);





