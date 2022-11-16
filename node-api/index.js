const axios = require('axios')
const express = require('express')
const app = express()
app.listen('3000', console.log('Rodando'))
/*
app.route('/').get((req,res) => {
    res.send('Hello')
})
*/

app.use(express.json())

/*
app.route('/').post((req,res) => {
    console.log(req.body)
})
*/

/*
let nome = 'Diego'
app.route('/').put((req,res) => {
    nome = req.body.nome
    res.send(nome)
})
*/

/*
app.route('/:nome').get((req,res) => {
    res.send(req.params.nome)
})
*/

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/DiegoAVaz')
    .then(result => res.send(`<img src='${result.data.avatar_url}'/>`))
    .catch(error => console.log(error))
})