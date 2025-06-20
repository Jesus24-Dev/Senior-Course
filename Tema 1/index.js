const persona = {
    nombre: "Javierbb", 
    edad: 26,
    sexo: true
}

const {nombre, edad} = persona;

console.log(nombre, edad)

const frutas = ["manzana", "fresa"]
const frutas_verduras = [...frutas, "ocumo", "zanahoria"]

console.log(frutas_verduras)

function sumaDosOMasNumeros(...numeros){
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0)
}

console.log(sumaDosOMasNumeros(1,2,3,4,5))
console.log(sumaDosOMasNumeros(1,2))
console.log(sumaDosOMasNumeros(1,2,3,4,5,6,7,8,9,10))

console.log(suma(2,4))


//PROMESAS

let promise = new Promise((resolve, reject) => {

    if(true){
        resolve("chamo extra;o a mi ex");
    } else {
        reject("noooo mi compa")
    }
})

const tomarValorPromesa = async() => {
    try {
        const respuesta = await promise
        console.log(respuesta)
    } catch (e){
        console.log(e);
    }
} 

tomarValorPromesa()