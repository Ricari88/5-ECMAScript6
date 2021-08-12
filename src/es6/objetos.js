//propieda de objetos mejorada

let name = 'Ricardo'
let age = 32
//old (es5)
obj = {
    nombre : name,
    edad : age
};
//es6
obj2 = {name, age}

console.log(obj2)


//arrow functions
const names = [
    {name:'Ricardo', age: 33, country:'MX'},
    {name:'Yessica', age: 34, country: 'MX'}
]


let listOfNames = names.map(function(item){
    console.log(item.name)
})

//es6
let listOfNames2 = names.map(item=>{console.log(item.name)})

const listOfNames3 = (name,age,country)=>{
    console.log(name)
}


const listOfNames4 = name =>{
    console.log(name)
}


const square = num => num * num;


//promesas
const helloPromise = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('HEY!!!');
        }
        else{
            reject('OOPS!')
        }
    });
}

helloPromise()
    .then(response=>console.log(response))
    .catch(error=>console.log(error));