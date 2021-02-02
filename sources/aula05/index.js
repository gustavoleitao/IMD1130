const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000
const env =  process.env.NODE_ENV || "development"

app.get('/', (req, res) => {
    res.send(`Hello World no ambiente [${env}]`)
})

app.get('/escrever', (req, res) => {
    escrever(req, res);
})

app.get('/ler', (req, res) => {
    ler(req, res);
})

function ler(req, res){
    fs.readFile('/tmp/data.log', 'utf8', (err, data) => {
        if (err) {
            res.send('Falha ao ler o arquivo');
        }else{
            res.send(data);
        }
    });
}

function escrever(req, res){
    const timestamp = new Date().toISOString();
    fs.appendFile("/tmp/data.log", `${timestamp} Requisição recebida. </br> \r\n`, function(err) {
        if(err) return console.log(err);
        res.send('Requisição registrada com sucesso.')
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))