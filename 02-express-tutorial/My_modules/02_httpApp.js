const http = require('http')

const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        console.log('user hit the server!!!');
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about') {
        console.log('user hit the server!!!');
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page!!</h1>')
        res.end()
    }
    else if(url === '/styles.css') {
        console.log('user hit the server!!!');
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/logo.svg') {
        console.log('user hit the server!!!');
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js') {
        console.log('user hit the server!!!');
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
    }
})

server.listen(5000)