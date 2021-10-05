const http = require('http');
const fs = require('fs');

const hostname='127.0.0.1';
const port =3000;
const home = fs.readFileSync('JavaScript/classBackend/home.html');
const about = fs.readFileSync('JavaScript/classBackend/about.html');
const contact = fs.readFileSync('JavaScript/classBackend/contact.html');
const product = fs.readFileSync('JavaScript/classBackend/product.html');

const server =http.createServer((req, res) => {
    console.log(req.url);
    url=req.url;
     
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else if(url=='/product'){
        res.end(product);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");about
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });