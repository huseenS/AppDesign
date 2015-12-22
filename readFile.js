var sel_elem = document.getElementById('selector');
var tableElem = document.getElementById("contentsTable");
var contentArray = [];
var DTArray = [];

function readTheFile() {
    console.log(sel_elem.files[0]);
    // making an instance of the library class FileReader
    var reader = new FileReader();

    // When the file read is finished, call fileReadFinsihed
    reader.onload = fileReadFinished;

    // Start reading the file
    reader.readAsText(sel_elem.files[0]);

    console.log("Reading...");
    // Nope! var contents = library.readFile( sel_elem.files[ 0 ] );
}



function renderTable() {
    console.log("renderTable");

    for (var i = 0; i < contentArray.length; i++) {

        console.log("runForLoop");
        var ipElem = document.createElement('tr');
        ipElem.value = "IP Addresses:";
        var ipCellElem = document.createElement('td');

        ipCellElem.innerHTML = contentArray[i]
        tableElem.appendChild(ipElem);
        ipElem.appendChild(ipCellElem);
    }

    for (var i = 0; i < DTArray.length; i++) {
        var dateTimeElem = document.createElement('tr');
        var dateTimeCellElem = document.createElement('td');

        dateTimeCellElem.innerHTML = DTArray[i];
        tableElem.appendChild(dateTimeElem);
        dateTimeElem.appendChild(dateTimeCellElem);
    };
}

function fileReadFinished(evt) {
    var reader = evt.target;
    var content = reader.result;
    var address_pattern = /(\d{1,3}\.){3}\d{1,3}/g;
    var datePatternMatch = /\[(.*?)\]/g;
    var contentDT = content.match(datePatternMatch);
    var contentIP = content.match(address_pattern);

    console.log(contentIP);
    console.log(contentDT);
    contentArray = contentIP;
    DTArray = contentDT;
    renderTable();

    //contents_elem.appendChild(document.createTextNode(content));

    //console.log(reader.result);
    //Address: 66.249.69.105

    //[] any character in brackets
    // /w any asci word [a-zA-Z0-9]
    // /d any ascii digit[0-9]
    // {n.m} match previous item at 
    //least n times but no more than match
    // {n} match exactly n  times, {n,} n or more times

    // + match one or more
    // * 
    // ^ negated 
    // | or 

    // g global match
    // i case-insensitive

}