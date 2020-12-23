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