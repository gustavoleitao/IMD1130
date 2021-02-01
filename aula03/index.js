const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.listen(3000, () => {
    console.log('API Iniciada na porta 3000!!')
})
