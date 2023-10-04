const express = require('express')
const app = express()

const dotenv = require('dotenv')

// Setting up config.env file variable
dotenv.config({path: './config/config.env'})

//Connecting to the database
const connectDB = require('./config/database')

// importing all routes
const jobs = require('./routes/jobs')

app.use(express.json())

app.use('/api', jobs)

const PORT = process.env.PORT || 3000

const start = async () => {
    try{
        await connectDB()
        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()