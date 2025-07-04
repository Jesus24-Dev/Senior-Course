const http = require('http')


function llamarServidor(){
    const servidor = http.createServer((req, res) => {
        if(req.url == "/"){
            res.write("INICIO")
        } else if (req.url == "/condones"){
            res.write("carrasquel no usa. ABRO DEBATE SE PUEDE PONER UNO?")
        } else if(req.url =="/si"){
            res.write("wtf")
        } else {
            res.statusCode = 404
            res.write("NOT FOUND")
        }
        res.end();
    })

    servidor.listen(3000, () => {
        console.log("server running at port 3000")
    })
}


module.exports = {llamarServidor}