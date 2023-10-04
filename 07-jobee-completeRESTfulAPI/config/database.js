const mongoose = require('mongoose')

const connectDB = async() => { 
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then( con => {
        console.log(`MongoDB Database with host:${con.connection.host}`)
        console.log('Connected to MongoDB!')
    }).catch((err) => {
        console.error(`Error connecting to the mongodb.${err}`)
        process.exit()
    })
}

module.exports = connectDB