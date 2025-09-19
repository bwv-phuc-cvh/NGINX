const http = require('http');

const PORT = process.env.PORT || 3000;

const NAME = process.env.NAME || 'server-name';

const server = http.createServer((req,res)=>{
    res.end(`Response from server on port ${PORT}`)
})

server.listen(PORT,()=>{
    console.log(`${NAME} is running on port ${PORT}`)
});

