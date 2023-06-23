const http =require('node:http')

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('Hello World')
    }else if(req.url === '/about'){
        res.end('This is about page')
    }


})

server.listen(1000, ()=>{
    console.log('server is running on port 1000')

})