//parametros por defecto

//oldstyle
function newFunction(name, age, country) {
    var name = name || 'ricardo';
    var age = age || 33;
    var country = country || 'MX';

    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'Ricardo', age = 33, country = 'MX') {
    console.log(name, age, country)
}

newFunction2();
newFunction2('Juan',23,'CO')

//template literals para separar o unir varios elementos

let hello = 'hello'
let world = 'world'
let epicPhrase = hello + ' '+ world
console.log(epicPhrase)

//es6
let epicPhrase2 = `${hello} ${world}`;