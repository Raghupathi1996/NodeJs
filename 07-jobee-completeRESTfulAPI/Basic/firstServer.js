const http = require("http")

const server = http.createServer((req, res) => {
    res.end('First web Server')
})

server.listen(3000, () => {
    console.log('Server is started')
})
