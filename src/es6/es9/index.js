//es 9 fue lanzada en junio de 2018

/*operador de reposo,
el cual puede extraer las propiedades de un
objeto qaue aun no se ha construido*/


const obj = {
    name: 'Ricardo',
    age: 33,
    country: 'MX'
};

let {country,...all} = obj;
console.log(all)


//propagacion

const obj = {
    name:'Ricardo',
    age:33
}

const obj1={
    ...obj,
    country:'MX'
}

console.log(obj1.name)


//promise finally
const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(()=>resolve('Hello World'),3000)
            :reject(new Error('Test error'))
    });
}

helloWorld()
    .then(response=>console.log(response))
    .catch(error=> console.log(error))
    .finally(()=>console.log('Finalizado'))


//regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-08-22');
const year = match[1]
const month = match[2]
const day = match [3]

console.log(year,month,day)