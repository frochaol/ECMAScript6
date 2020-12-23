// Parametros por defecto en versión anterior a ES6
function newFunction(name, age, country) {
    var name = name || 'fernando';
    var age = age || 28;
    var country = country || 'PE';
    console.log(name, age, country);
}

// Parametros por defecto en versión ES6
function newFunction2(name = 'fernando', age = 28, country = 'PE') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('oscar', '32', 'MX')

// Template literals  - separa o unir varios elementos
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Ahora en ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// -- Multilineas anterior
let lorem = "Este texto es super rápido para probar el curso \n" 
+ "Otra frase necesitada.";

// -- Multilineas en ES6
let lorem2 = `primera frase épica
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

// -- Deseestructuración de elementos 

let person = {
    'name': 'fernando',
    'age': 28,
    'country': 'PE'
}
console.log(person.name, person.age, person.country);
// Nueva versión en ECMAScript 6
let { name, age, country } = person;
console.log(name, age, country);

// -- Spread Operator - anterior
let team1 = ['Fernando', 'Oscar', 'Julian'];
let team2 = ['Valeria', 'Yessica', 'Camila'];
// -- Spread Operator - nueva forma 
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














