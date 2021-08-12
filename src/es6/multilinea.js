//multilinea

//old

let lorem = 'blablablablableble\n'
+ "blobloblo"


//es6

let lorem2 = `another phrase

shit
alv`

console.log(lorem2)


//destructuracion de objetos
//old shit
let person = {
    'name' : 'Ricardo',
    'age' : 33,
    'country' : 'MX'
}

console.log(person.name)

//es6

let {name, age, country} = person;

console.log(name, age);


//operador de propagacion

//es6
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yessica', 'Camila']

let education = [...team2,'David', ...team1]

console.log(education)

//let
{
    var globalVar = "global var"
}

{
    let globalLet = "global let"
    console.log(globalLet)
}


console.log(globalVar)


//const

const a = 'b'
//no permite reasignar valores a la constante
a='a'
console.log(a)