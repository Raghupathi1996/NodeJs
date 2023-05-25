require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const ProductsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.json())

app.use('/api/v1/products', ProductsRouter)

app.get('/', (req,res) => {
    res.send('<h1> Store API</h1><a href="/api/v1/products">products list</a>')
})

// app.use('api/v1/products', ProductsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async(req, res, next) => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`listening at ${port}......!`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()