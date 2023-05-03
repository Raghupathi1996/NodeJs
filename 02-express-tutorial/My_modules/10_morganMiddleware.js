const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// add logger to the whole application
// app.use(logger)

//is going to apply logger to every route which is follwed by api
// app.use([logger, authorize]) // executed in the order it writen

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/Products', (req, res) => {
    res.send('Products Page')
})

app.get('/api/Item', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send('Item Page')
})

app.listen(5000, () => {
    console.log('Listening to port 5000..!!')
})


