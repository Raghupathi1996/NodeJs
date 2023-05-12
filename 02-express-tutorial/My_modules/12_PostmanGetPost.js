const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'Please provide name value'})
    }
    console.log("data sent from the backend - and printing at the backend", name)
    res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req,res) => {
    const {name} = req.body
    if(!name) {
       return res
        .status(400)
        .json({success:false, msg:'Please provide name value'}) 
    }
    res.status(201).json({success:true, data:[...people, name]})

})

app.post('/login', (req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Hello ${name}`);
    }
    res.status(404).send('Please provide Credentials')
})

app.listen(5000, () => {
    console.log('Listening to port 5000..!!')
})