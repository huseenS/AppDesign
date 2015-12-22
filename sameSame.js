var fs = require('fs'); //like import util in java

for (var i = 0; i < process.argv.length; i++) {
    console.log(i, process.argv[i]);
}

//did user type filename
if (process.argv.length < 4) {
    console.log("Usage: Need filename");
    process.exit(1);
};
var filename2 = process.argv[2];
var filename2 = process.argv[3];
console.log("you want to read file: ", filename1, filename2);

//try catch avoids 
try {
    var fileBuffer = fs.readFileSync(filename);
} catch (exp) {
    console.log("failed to read file either filname", filename1, filename2);
    process.exit(2);
}

var contentLines1 = fileBuffer.toString().split('\n');
var contentLines2 = fileBuffer.toString().split('\n');

if (contentLines1 !== contentLines2.length) {
    console.log("Files are not the same");
    process.exit(0);
};

for (var i = 0; i < contentLines1.length; i++) {
    if (contentLines[i] !== contentLines2[i]) {
        console.log("Files are not the same");
        process.exit(0);
    }
}
console.log("Files are the Same!");

for (var i = 0; i < contentLines.length; i++) {
    console.log(i, contentLines[i]);
}