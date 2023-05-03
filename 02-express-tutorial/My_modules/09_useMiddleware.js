const express = require('express')
const app = express()
const logger = require('./logger')

// add logger to the whole application
// app.use(logger)

//is going to apply logger to every route which is follwed by api
app.use('/api',logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/Products', (req, res) => {
    res.send('Products Page')
})

app.get('/api/Item', (req, res) => {
    res.send('Item Page')
})

app.listen(5000, () => {
    console.log('Listening to port 5000..!!')
})

