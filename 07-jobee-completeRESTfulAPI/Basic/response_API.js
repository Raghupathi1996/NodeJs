const http = require("http")

data = [
    {
        id : 1,
        name : "Raghu"
    },
    {
        id : 2,
        name : "Sundararaj"
    },
    {
        id : 3,
        name : "Subha"
    },
    {
        id : 4,
        name : "Pragathi"
    },
    {
        id : 5,
        name : "Kiruba"
    }
]
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Language', 'en-US')
    res.setHeader('Date', new Date(Date.now()))
    res.setHeader('X-Powered-By', 'Node.js')
    res.end(JSON.stringify({
        success:true,
        message:"Hello World",
        data : data
    }))
})

server.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})