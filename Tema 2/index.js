const { hacerAlgo, eliminarArchivo, mostrarStats } = require('./src/filesystem')
const {llamarServidor} = require("./src/nodehttp")
const {getInfoFromSystem} = require("./src/operatingsystem")

// hacerAlgo();
// eliminarArchivo("archivo2.txt")
// mostrarStats("archivo.txt")

// llamarServidor();

getInfoFromSystem();