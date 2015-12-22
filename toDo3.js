
var list_elem = document.getElementById( "the_list" );
var new_elem = document.getElementById( "new_item_text" );
var prio_elem = document.getElementById( "priority_input" );
var removeElemName = document.getElementById("removeInput");


var js_obj1 = { priority: 12, name: "shop" };
var js_obj2 = { priority: 14, name: "clean" };
var js_obj3 = { priority: 20, name: "do homework" };
var items = [ js_obj1, js_obj2, js_obj3 ];

function compareToDoItems( item1, item2 ) {
    console.log( "Compare: ", item1.name, item2.name );
    return item1.priority - item2.priority;
}

function renderList() {
     items.sort( compareToDoItems );

    while( list_elem.firstChild != null ){
        list_elem.removeChild( list_elem.firstChild );
    }

    for( var i = 0; i < items.length; i++ ){
        var item_elem = document.createElement( 'tr' );
        var txt_elem = document.createElement('td');
        var btn_elem = document.createElement('input');
        var btn_cell_elem = document.createElement('td');
        

        // make the contents of item_elem be items[i]
        item_elem.innerHTML = items[i].name + " (" + items[i].priority + ")";
        item_elem.array_index = i; // add new field called array index and set value
        btn_elem.onclick = delElem; //delete later don't put parens() or it will execute immediately
        btn_elem.value = "delete this item";
        btn_elem.type = "button";
        btn_elem.array_index = i;

        // add item_elem as a child of list_elem
        list_elem.appendChild( item_elem );
        item_elem.appendChild(txt_elem);
        item_elem.appendChild(btn_cell_elem);
        btn_cell_elem.appendChild(btn_elem);
        

        if (items[i].priority >= 0 && items[i].priority <= 50) {
            item_elem.className = "lowPrio";
        } else {
            item_elem.className = "highPrio";
        }


    }
}


function addItem() {
    var new_obj = { priority: prio_elem.value, name: new_elem.value };
    items.push( new_obj );
    // alert( "ADADADADDDDD "+new_elem.value );
    renderList();
}

function delElem(evt) {
    //console.log(evt.target.parentNode);
	console.log('test ' + evt); //logs mouse event
    items.splice(evt.target.array_index, 1);
	renderList();	
} 

function pageLoaded() {
    renderList( 0 );
}

function priorityChange() {
    console.log( prio_elem.value );
}


//asdfds