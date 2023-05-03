const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page!!</h1><h3><a href="/api/products">Products</a></h3>')
})

app.get('/api/products', (req, res) => {
    const newProd = products.map((products) => {
        const { id, name, image} = products;
        return {id, name, image}
    });
    res.json(newProd)
})

app.get('/api/products/:ProductID', (req,res) => {
    console.log(req.params)
    const {ProductID} = req.params
    const singleProd = products.find(
        (products) => products.id === Number(ProductID)
        )
    if(!singleProd){
        return res.status(404).send(
            '<h3>Product Not Found</h3><h4><a href="/api/products">Product List</a></h4>'
            )
    }
    res.json(singleProd)
})

app.get('/api/products/:ProductID/reviews/:ReviewID', (req, res) => {
    res.send('<h2>Review List</h2>')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    res.send('Hello World')
})

app.listen(5000, ()=> {
    console.log('Listening to port 5000...!!!')
})