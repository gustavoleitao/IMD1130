const express = require('express')
const redis = require('redis')
const cache = redis.createClient()
const app = express()
const port = 3000

cache.on('connect', () => {
  console.log('Redis is ready');
});
 
cache.on('error', (e) => {
  console.log('Redis error', e);
});

app.get('/ler/:key', (req, res) => {
    cache.get(req.params.key, (err, reply) => {
        if (err){
            res.send('ERROR')
        }else{
            res.send(reply)
        }
    })
})

app.get('/escrever/:key/:valor', (req, res) => {
    cache.set(req.params.key, req.params.valor, function (err, reply){
        if (err){
            res.send('ERROR')
        }else{
            res.send('OK')
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))