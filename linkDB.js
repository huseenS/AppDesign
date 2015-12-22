var linkElem = document.getElementById("Links");
var nameElem = document.getElementById("Names");
var newLinkElem = document.getElementById("linkURL");
var newNameElem = document.getElementById("linkName");
var removeNameElem = document.getElementById("nameRemoval");
var editButton = document.getElementById("ed");
//var linkToChange = document.getElementById("editLinkName");
//var linkChangeElem = document.getElementById("linkChange");
//intialize arary
var list = [{
    name: "google.com",
    url: "http://www.google.com"
}];

function renderLists(argument) {

    //remove duplicates
    while (Links.firstChild !== null) {
        Links.removeChild(Links.firstChild);
        Names.removeChild(Names.firstChild);
    }
    for (var i = 0; i < list.length; i++) {
        var LinkListElem = document.createElement('a');
        LinkListElem.href = list[i].url;
        var linkNameElem = document.createElement('li');

        var replaceInput = document.createElement('input');
        replaceInput.type = "text";
        replaceInput.value = list[i].url;

        var replaceButton = document.createElement('input');
        replaceButton.type = "button";
        replaceButton.value = "REPLACE!!"
        replaceButton.onclick = editURL;
        replaceButton.array_index = i;
        replaceButton.input_text = replaceInput;
        

        //add anchor tag
        LinkListElem.innerHTML = list[i].name;
        linkNameElem.innerHTML = list[i].name;
        linkNameElem.array_index = i;
        //add child elems
        linkElem.appendChild(LinkListElem);
        nameElem.appendChild(linkNameElem);
        linkElem.appendChild(replaceButton);
        linkElem.appendChild(replaceInput);

    }
}

function editURL(evt) {
    console.log(evt);
    var btn = evt.target;
        list[replaceButton.array_index].url = replacebuton.input_text;
        renderLists();
} 


function addLink() {
    var webSite = {
        name: newNameElem.value,
        url: newLinkElem.value
    };
    list.push(webSite);
    renderLists();
}

function removeLink(argument) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].name.toLowerCase() == removeNameElem.value.toLowerCase().trim()) {
            list.splice(i, 1);
            console.log("Item removed " + i);
            break;
        }
    }
    renderLists();
}

function pageLoad(argument) {
    renderLists();
}

// //