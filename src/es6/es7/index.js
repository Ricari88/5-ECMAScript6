//includes

let numbers = [1,2,3,4,5,7,8]
let valor= 10
if (numbers.includes(valor)) {
    console.log(`si se encuentra el valor ${valor}`)
}
else{
    console.log("no se encuentra")
}

//elevar a potencia

let base = 4
let exponente = 3

let result = base ** exponente
console.log(result)