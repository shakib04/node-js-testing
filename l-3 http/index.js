const http = require('http');
const port = 2000; 
const hostname = "localhost";

const server = http.createServer((request, response) => {
    response.end("Server Created");
});

server.listen(port,hostname, () => {
    console.log(`server started at ${port} port and server ${hostname}`);
});