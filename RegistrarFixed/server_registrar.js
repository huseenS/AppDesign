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
    return kvs;
}

function addStudent(req, res) {
    var kvs = getFormValuesFromURL(req.url);
    var db = new sql.Database('registrar.sqlite');
    var name = kvs['name'];
    var sandwich = kvs['sandwich'];
    db.run("INSERT INTO Students(Name, SandwichPreference) VALUES ( ?, ? )", name, sandwich,
        function(err) {
            if (err === null) {
                res.writeHead(200);
                res.end("Added student");
            } else {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED");
            }
        });
}

function displayStudent(req, res) {
    var db = new sql.Database('registrar.sqlite');
    db.all("SELECT * FROM Students",
        function(err, rows) {
            if (err) {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED " + err);
            } else {
                res.writeHead(200);
                var response_text = "<html><body><table><tbody>";
                for (var i = 0; i < rows.length; i++) {
                    response_text += "<tr><td> " + rows[i].sid + "</td><td>" + rows[i].Name +
                        "</td><td>" + rows[i].SandwichPreference + "</td></tr>";
                }
                response_text += "</tbody></table></body></html>";
                res.end(response_text);
            }
        });
}

function addTeacher(req, res) {
    var kvs = getFormValuesFromURL(req.url);
    var db = new sql.Database('registrar.sqlite');
    var id = kvs['teacherID'];
    var name = kvs['name'];
    db.run("INSERT INTO Teachers(tid, Name) VALUES ( ?, ? )", id, name,
        function(err) {
            if (err === null) {
                res.writeHead(200);
                res.end("Added Teacher " + name + " " + id);
            } else {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED");
            }
        });
}

function displayTeachers(req, res) {
    var db = new sql.Database('registrar.sqlite');
    db.all("SELECT * FROM Teachers",
        function(err, rows) {
            if (err) {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED " + err);
            } else {
                res.writeHead(200);
                var response_text = "<html><body><table><tbody>";
                for (var i = 0; i < rows.length; i++) {
                    response_text += "<tr><td> " + rows[i].tid + rows[i].Name + " </td></tr>";
                }
                response_text += "</tbody></table></body></html>";
                res.end(response_text);
            }
        });
}

function addTeachingAssignment(req, res) {
    var kvs = getFormValuesFromURL(req.url);
    var db = new sql.Database('registrar.sqlite');
    var tid = kvs['teacher'];
    var cid = kvs['class'];
    db.run("INSERT INTO TeachingAssignments(teacher, Class) VALUES ( ?, ? )", tid, cid,
        function(err) {
            if (err === null) {
                res.writeHead(200);
                res.end("Added Teaching Assignment " + tid + " " + cid);
            } else {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED");
            }
        });
}

function displayTeacherAssignments(req, res) {
    var db = new sql.Database('registrar.sqlite');
    db.all("SELECT * FROM TeachingAssignments",
        function(err, rows) {
            if (err) {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED " + err);
            } else {
                res.writeHead(200);
                var response_text = "<html><body><table><tbody>";
                for (var i = 0; i < rows.length; i++) {
                    response_text += "<tr><td> " + rows[i].teacher + rows[i].Class + " </td></tr>";
                }
                response_text += "</tbody></table></body></html>";
                res.end(response_text);
            }
        });
}

function addClass(req, res) {
    var kvs = getFormValuesFromURL(req.url);
    var db = new sql.Database('registrar.sqlite');
    var cid = kvs['CID'];
    var name = kvs['CourseName'];
    db.run("INSERT INTO Courses(cid, Name) VALUES ( ?, ? )", cid, name,
        function(err) {
            if (err === null) {
                res.writeHead(200);
                res.end("Added class! " + name + " " + cid);
            } else {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED");
            }
        });


}

function displayClass(req, res) {
    var db = new sql.Database('registrar.sqlite');
    db.all("SELECT * FROM Courses",
        function(err, rows) {
            if (err) {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED " + err);
            } else {
                res.writeHead(200);
                var response_text = "<html><body><table><tbody>";
                for (var i = 0; i < rows.length; i++) {
                    response_text += "<tr><td> " + rows[i].cid + rows[i].Name + " </td></tr>";
                }
                response_text += "</tbody></table></body></html>";
                res.end(response_text);
            }
        });
}

function addEnrollement(req, res) {
    var kvs = getFormValuesFromURL(req.url);
    var db = new sql.Database('registrar.sqlite');
    var sid = kvs['SID'];
    var cid = kvs['CID'];
    db.run("INSERT INTO Enrollments(student, Name) VALUES ( ?, ? )", sid, cid,
        function(err) {
            if (err === null) {
                res.writeHead(200);
                res.end("Enrolled! " + sid + " " + cid);
            } else {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED");
            }
        });
}

function displayEnrollment(req, res) {
    var db = new sql.Database('registrar.sqlite');
    db.all("SELECT * FROM Enrollments",
        function(err, rows) {
            if (err) {
                console.log(err);
                res.writeHead(200);
                res.end("FAILED " + err);
            } else {
                res.writeHead(200);
                var response_text = "<html><body><table><tbody>";
                for (var i = 0; i < rows.length; i++) {
                    response_text += "<tr><td> " + rows[i].student +
                        "</td><td>" + rows[i].Name + "</td></tr>";
                }
                response_text += "</tbody></table></body></html>";
                res.end(response_text);
            }
        });
}

function serve_file(req, res) {
    var filename = "./" + req.url;
    try {
        var contents = fs.readFileSync(filename).toString();
        res.writeHead(200);
        res.end(contents);
        return true;
    } catch (err) {
        return false;
    }
}


function serve_dynamic(req, res) {
    if (req.url.indexOf("add_student?") >= 0) {
        addStudent(req, res);
        displayStudent(req, res);
    } else if (req.url.indexOf("add_teacher?") >= 0) {
        addTeacher(req, res);
        displayTeachers(req, res);
    } else if (req.url.indexOf("add_classes?") >= 0) {
        addClass(req, res);
        displayClass(req, res);
    } else if (req.url.indexOf("add_enrollment?") >= 0) {
        addEnrollement(req, res);
        displayEnrollment(req, res);
    } else if (req.url.indexOf("add_teacherAssignment?") >= 0) {
        addTeachingAssignment(req, res);
        displayTeacherAssignments(req, res);
    } else {
        // console.log( exp );
        res.writeHead(404);
        res.end("Cannot find file: " + filename);
    }
}

function server_fun(req, res) {
    console.log("The URL: '", req.url, "'");
    if (req.url === "/" || req.url === "/index.htm") {
        req.url = "/index.html";
    }
    var file_worked = serve_file(req, res);
    if (file_worked)
        return;

    serve_dynamic(req, res);
}

var server = http.createServer(server_fun);

server.listen(8080);