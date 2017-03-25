// var http = require('http');

// var port = process.env.PORT||3000; //which you can run both on Azure or local

// http.createServer(function (req, res) {
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, world!');
    
// }).listen(process.env.PORT||3000);

//make express generator code work with node js app

var debug = require('debug')('my-application');
var app = require('./app');
app.listen(process.env.PORT || 805);