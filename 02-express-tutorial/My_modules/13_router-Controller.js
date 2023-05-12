const express = require('express')
const app = express()

const auth = require('./routes/auth')
const people = require('./routes/people')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Listening to port 5000..!!')
})
