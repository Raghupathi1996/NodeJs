const express = require('express')
const path = require('path')

const app = express()
// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     // adding index.html to static assets
//     //SSR
// })

app.all('*', ()=>{
    res.status(404).send('Page not found!!')
})
app.listen(5000,()=>{
    console.log('Listening to Port 5000...!!!')
})