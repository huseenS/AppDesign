var fs = require('fs'); //like import util in java

for (var i = 0; i < process.argv.length; i++) {
    console.log(i, process.argv[i]);
}

//did user type filename
if (process.argv.length < 3) {
	console.log("Usage: Need filename");
	process.exit(1);
};
var filename = process.argv[2];
console.log("you want to read file: ", filename);

//try catch avoids 
try {
	var fileBuffer = fs.readFileSync(filename);
} 
catch(exp) {
	console.log("failed to read file", filename);
	process.exit(2);
}

var contents = fileBuffer.toString();
var contentLines = contents.split('\n'); //splits into array

for (var i = 0; i < contentLines.length; i++) {
	console.log(i, contentLines[i]);
}

