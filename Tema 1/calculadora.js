
const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2 = 1) => num1 * num2;

const division = (num1, num2) => {

    if(num1 == 0 || num2 == 0) return undefined;

    return num1 / num2;
}

console.log(`Suma es: ${suma(5,5)}`)
console.log(`Resta es: ${resta(5,5)}`)
console.log(`Multiplicacion es: ${multiplicacion(5)}`)
console.log(`Division es: ${division(5, 0)}`)

export {suma, resta, multiplicacion, division}