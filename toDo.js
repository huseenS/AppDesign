
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
        var item_elem = document.createElement( 'li' );
        // make the contents of item_elem be items[i]
        item_elem.innerHTML = items[i].name + " (" + items[i].priority + ")";
        // add item_elem as a child of list_elem
        list_elem.appendChild( item_elem );

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

function removeItem () {
	console.log('test');
	for (var i = 0; i<items.length; i++) {
		if (items[i].name.toLowerCase().trim() === removeElemName.value.toLowerCase().trim()) {
			items.splice(i, 1);
			console.log("Item removed " + i);
            break;
		}
	} 
	renderList();	
}

function pageLoaded()
{
    renderList();
}

function priorityChange()
{
    console.log( prio_elem.value );
}


//asdfds