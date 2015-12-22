var http = require("http"); //hypertexttransfer protocol
var fs = require("fs");

function download(url, dest, callback) {
    console.log("start downloading");
    var file = fs.createWriteStream(dest);

    var request = http.get(url, function (response) {
        console.log("response??", response);
        file.on("finish", function() { //event that will happen
            console.log("Finished writing!");
        });
        response.pipe(file);
    });
    //not temporally after the get is done
    request.on("error", function (err) {
        console.log("Eror!", err);
    });
    console.log("sent request");


}

download("http://cs.coloradocollege.edu/index.html", "cs.html", null);
console.log("Done?");