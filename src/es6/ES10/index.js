//junio de 2019
//array flat
let array = [1,2,3,[1,2,3,[1,2,3]]]

console.log(array.flat(2))


//flat map para mapear un array

let array = [1,2,3,4,5]
console.log(array.flatMap(value=>[value, value*2]))


//trimStart para eliminar los espacios en blanco de un string

let hello = '    hello world'
console.log(hello)
console.log(hello.trimStart())

//optional catch binding
//old
try{

}catch(error){
    error
}

//es10
try{
    //code
}
catch{
    //error
}

//fromEntries
let entries = [["name","Ricardo"],["age",33]];

obj = Object.fromEntries(entries)

console.log(obj.name)

//object type symbol

let mySymbol = 'My symbnol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)