var url = require('url');
var fs = require('fs');
var path = require('path');

/* PAGE NOT FOUND */
var PageNotFound = (request, response) => {
    fs.readFile("./404.html", 'binary', (err, file) => {
        response.writeHead(404);
        response.write(file, 'binary');
        response.end();
    });    
}
var getExtensions = (extension, response) => {
    switch(extension) {
        case "html":
            response.writeHead(200, {"Content-Type": 'text/html'});
        break;
        case "css":
            response.writeHead(200, {"Content-Type": 'text/css'});
        break;
        case "js":
            response.writeHead(200, {"Content-Type": 'text/javascript'});
        break;
        case "png":
            response.writeHead(200, {"Content-Type": 'image/png'});
        break;
        case "jpg":
            response.writeHead(200, {"Content-Type": 'image/jpg'});
        break;
        default:
            response.writeHead(200, {"Content-Type": 'text/html'});
        break;
    }
}
module.exports = {
    handleRequest: (request, response) => {
        try {
            if(request.method === "GET") {
                var uri = url.parse(request.url).pathname;
                var filename = path.join(process.cwd(), uri);

                var tmp  = uri.lastIndexOf(".");
                var extension  = uri.substring((tmp + 1));

                if(uri === "/") {
                    filename = filename + 'index.html';
                }
                fs.readFile(filename, 'binary', (err, file) => {
                    if (err) {
                        PageNotFound(request, response);    
                        return;
                    }
                    getExtensions(extension, response)
                    response.write(file, 'binary');
                    response.end();
                });                    
            } else {
                
            }
    }
    catch (e) {
        PageNotFound(request, response);
    }
}
};