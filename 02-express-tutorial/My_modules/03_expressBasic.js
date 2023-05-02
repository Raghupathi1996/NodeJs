const express = require('express')
const app = express()

app.get('/', (req,res) => {
    app.status(200).send('Home Page')
})

app.get('/about', (req,res) => {
    app.status(200).send('About Page')
})

app.all('*', (req,res) => {
    app.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(5000,() => {
    console.log('Listening to Port 5000')
})