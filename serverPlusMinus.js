var http = require("http");
var fs = require('fs');
var number = 0;



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
        if (req.url.indexOf("plus?") >= 0) {
            number++
            res.writeHead(200);
            //res.write("PLUS" + number)
            res.end( < html lang = "en" >
                < head >
                < meta charset = "UTF-8" >
                < title > plusMinus Game < /title> < /head > < body >
                < form action = "plus"
                method = "get" > < /form> < input type = "submit"
                value = "PLUS" > < /input> < form action = "minus"
                method = "get" > < /form> < input type = "submit"
                value = "MINUS" > < /input> < /body > < /html>)

            } else if (req.url.indexOf("minus?") >= 0) {
                number--;
                res.writeHead(200);
                res.end( < html lang = "en" >
                    < head >
                    < meta charset = "UTF-8" >
                    < title > plusMinus Game < /title> < /head > < body >
                    < form action = "plus"
                    method = "get" > < /form> < input type = "submit"
                    value = "PLUS" > < /input> < form action = "minus"
                    method = "get" > < /form> < input type = "submit"
                    value = "MINUS" > < /input> < /body > < /html>)

                    //res.write("MINUS" + number)
                }
                console.error("Could not read", filePath);
            }
        }

        var server = http.createServer(serverFun);
        server.listen(8080); //8080 is a port localhost

        //ifconfig