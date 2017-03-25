var http = require('http');

var port = process.env.PORT||3000; //which you can run both on Azure or local

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT||3000);