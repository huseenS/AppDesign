var sql = require('sqlite3');

var db = new sql.Database('telluride.sqlite');

db.all('SELECT Performers.Name as PerfName, * ' +
    'FROM Performances ' +
    'JOIN Performers ON Performers.ID = Performances.PID ' +
    'JOIN Stages ON Stages.ID = Performances.SID ' +
    'WHERE Capacity < GroupSize',
    function(err, rows) {
        console.log(err);
        console.log(rows);
        console.log(rows.length);
        if (err !== null) {
            console.log(err);
            return;
        };
        for (var i = 0; i < rows.length; i++) {
            console.log("ERR " + rows[i].PerfName + "is too big for " + rows[i].Name);
        }

    });