const http = require('http')

const server=http.createServer((req,res)=>{
    res.end('hello form the server')
})


server.listen(4000,()=>{
    console.log('server is running on port 4000')
})