const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    // console.log('checking home page')
    // res.json([{name:'Kiruba'}, {name:'Raghu'}])
    res.json(products)
})

app.listen(5000, ()=> {
    console.log('Listening to port 5000...!!!')
})