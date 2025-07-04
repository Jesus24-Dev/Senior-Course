const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config();
const nombre = process.env.NOMBRE

function hacerAlgo(){
    fs.readFile('archivo.txt', 'utf-8', (error, data) => {
        if(error) throw new Error("Hubo un error al abrir el archivo: " + error.message)

        console.log(data)
    })

    const texto = 'otro texto para probar'

    fs.writeFile("archivo2.txt", texto, (error) => {
        if(error) throw new Error("Hubo un error al escribir el archivo: " + error.message)

        console.log("Se escribio correctamente el archivo.")
    })
}

function eliminarArchivo(nombreArchivo){
    fs.unlink(nombreArchivo, (err) => {
        if (err) throw err
        console.log('archivo eliminado')
    })
}

function mostrarStats(nombreArchivo){
    fs.stat(nombreArchivo, (err, stats) => {
        if (err) throw err
        console.log(`Archivo pesa: ${stats.size} bytes`)
    })
}

module.exports = {hacerAlgo, eliminarArchivo, mostrarStats};