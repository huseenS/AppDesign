var fs = require('fs');
var http = require('http');
var sql = require('sqlite3').verbose();


function getFormValuesFromURL(url) {
    var kvs = {};
    var parts = url.split("?");
    var key_value_pairs = parts[1].split("&");
    for (var i = 0; i < key_value_pairs.length; i++) {
        var key_value = key_value_pairs[i].split("=");
        kvs[key_value[0]] = key_value[1];
    }
    console.log(kvs);
    return kvs
}

function server_fun(req, res) {
    console.log(req.url);
    // ...
    var filename = "./" + req.url;
    try {
        var contents = fs.readFileSync(filename).toString();
        res.writeHead(200);
        res.end(contents);
    } catch (exp) {
        if (req.url.indexOf("/addStudents")) {
            var kvs = getFormValuesFromURL(req.url);
            var db = new sql.Database('studentsDB');
            var values = "(";
            values += kvs[studentName] + ",";
            values += kvs[ID] + ",";
            values += kvs[Year] + ",";
            values += kvs[Month] + ",";
            values += kvs[Day] + ","
            db.run("INSERT INTO Studentts (studentName, ID, Year, Month, Day) VALUES" + kvs,
                function(err, rows) {
                    res.writeHead(200);
                    resp_text = "\n";
                    res.end("You added a student " + err);
                    console.log(row);
                });

        } else if (req.url.indexOf("/firstForm") >= 0) {
            var kvs2 = getFormValuesFromURL(req.url);
            var db2 = new sql.Database('StudentsDB');

            db2.all("SELECT * FROM Studentts",
                function(err, rows) {
                    res.writeHead(200);
                    resp_text = "\n";
                    for (var i = 0; i < rows.length; i++) {

                        resp_text += rows[i].Name;
                        resp_text += rows[i].BirthMonth;
                        resp_text += rows[i].BirthYear;
                        resp_text += rows[i].BirthDay;

                    }
                    res.end("You submitted the first form!!!!! " + "\n" + resp_text);
                    console.log(row);
                });
        } else {
            // console.log( exp );
            res.writeHead(404);
            res.end("Cannot find file: " + filename);
        }
    }
}

var server = http.createServer(server_fun);
server.listen(8080); //8080 is a port localhost