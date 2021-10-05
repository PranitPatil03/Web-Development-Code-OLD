const http=require('http');
const fs=require('fs');
const { text } = require('stream/consumers');
const filecont=fs.readFileSync('class31p.html');

const severver = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(filecont);
});

server.listen(80,'127.0.0.1',()=>{
    console.log('listening on port 80');
});