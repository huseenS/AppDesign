var http = require("http");
var fs = require('fs');
var url = require('url');
var path = require('path');


function serverFun(req, res) {
    console.log(req.url);
    res.writeHead(200);

    try {
    	var filePath = url.parse(req.url).pathname;
        var f = fs.readFileSync(__dirname  + filePath);
        var contents = f.toString();
        var lines = contents.split('\n');
        for (var i = 0; i < lines.length; i++) {
            console.log(lines[i]);
        }
         res.write(lines)
        
    } catch (exp) {
        console.error("Could not read", filePath);
    }
    res.end("Hello World!") 

}

var server = http.createServer(serverFun);
server.listen(8080); //8080 is a port localhost