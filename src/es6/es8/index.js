//ES( se implemento en el 2017)
//async y await

//object.entries para devolver valores y la clave de una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)



//obejct values devuelve los valores de un objeto a un areglo

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)


//padding

const string = 'hello'

console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'------'))


//async await,  aqui viene lo bueno!!!
//promesas
const helloWorld = ()=>{
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(()=>resolve('Hello World'),3000)
            : reject(new Error('Test Error'))
    })
}

//async await
const helloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()


const anotherFunction = async () =>{
    try{
        const hello = await helloWorld()
        console.log(hello)
    }
    catch(error){
        console.log(error)
    }
}

anotherFunction()