var isHttps = false;
var http = require(isHttps ? 'https' : 'http');
var app = require('./app');

var host = '127.0.0.1';
var port = process.env.PORT || 8080;
var server;

if (isHttps) {
    server = http.createServer(app.handleRequest);
} else server = http.createServer(app.handleRequest);

/* LISTEN TO THE PORT */ 
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});


