const os = require('os')

/*
Usar el módulo os para obtener información sobre la memoria total y libre del sistema.
Obtener el directorio de inicio del usuario y la ruta temporal del sistema.
*/

function getInfoFromSystem(){
    const totalMemory = os.totalmem() / 1000000;
    const freeMemory = os.freemem() / 1000000;
    const mainDir = os.homedir();
    const tempDir = os.tmpdir();

    console.log(`TOTAL MEMORY: ${totalMemory}`)
    console.log(`FREE MEMORY: ${freeMemory}`)
    console.log(`MAIN DIRECTORY: ${mainDir}`)
    console.log(`TEMPORAL DIRECTORY: ${tempDir}`)
}

module.exports = {getInfoFromSystem}
