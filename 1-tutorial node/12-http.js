const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
        res.end('wlecome to our home page')

    if(req.url === '/about')
        res.end('here is our short story')
    res.end(`
    <h1>Oop!</h1>
    <p >Sorry, We can't find what you are looking for </p>
    <a href="/">back to homepage</a>
    `)

    // console.log(req);
})

server.listen(5000)
