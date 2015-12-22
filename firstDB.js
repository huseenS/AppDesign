var sql = require('sqlite3').verbose();

var db = new sql.Database('StudentsDB');

db.each("SELECT * FROM Students",
	function (err, row) {
		console.log(row);
	})