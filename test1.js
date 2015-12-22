var ListElem = document.getElementById("websiteList");
var newElem = document.getElementById("addNew");

var websiteObj1 = {name: "reddit.com", link: this.link(name)};
var websiteObj2 = {name: "google.com", link: this.link(name) };
var websites = [websiteObj1,websiteObj2];

function compareWebSiteNames( item1, item2 ) {
    console.log( "Compare: ", websiteObj1.name, websiteObj2.name );
    return item1.priority - item2.priority;
}

function renderList() {
	websites.sort(compareWebSiteNames);

	while( listElem.firstChild != null ){
        listElem.removeChild( list_elem.firstChild );
    }

	for (var i = 0; i < websites.length; i++) {
		var websiteElem = document.createElement("li");
		websiteElem.innerHTML = websites[i].name
		ListElem.appendChild(websiteElem);
	}
}

function pageLoaded() {

    renderList();
}

