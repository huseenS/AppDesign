var selectElem = document.getElementByID("selector");
var contentsElem = document.getElementByID("contents");

function readFIle () {
	console.log(selectElem.files[0]);
	//instance of library class filereader
	var reader = new FileReader();
	reader.onload = fileReadFinished;
	//Start reading the file
	reader.readAsText(selectElem.files[0]); //this continues executing
	console.log("reading...")
}

function fileReadFinished (evt) {
	var reader = evt.target;
	contentsElem.appendChild(document.createTextNode(reader.result));
	console.log(reader.result);

}