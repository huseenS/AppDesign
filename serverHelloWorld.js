var http = require("http");
var fs = require('fs');

function serverFun(req, res) {
     res.writeHead(200);
    console.log(req.url)


   

    try {
        var filePath = "./" + req.url;
        var f = fs.readFileSync(filePath);
        var contents = f.toString();

        console.log(contents);
        res.write(contents);

    } catch (exp) {
        console.error("Could not read", filePath);
    }
    res.end("Hello World!")

}

var server = http.createServer(serverFun);
server.listen(8080); //8080 is a port localhost

//ifconfig