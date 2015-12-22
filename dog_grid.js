var dogs = [ 'dog01.jpg', 'dog02.jpg', 'dog03.jpg', 'dog04.jpg' ];
var content_elem = document.getElementById( 'content' );
var ROWS = 4;
var COLS = 5;

function getRandomInt( min, max )
{
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

function pageLoaded()
{
    for( var r = 0; r < ROWS; r++ )
    {
        var row_elem = document.createElement( 'tr' );
        for( var c = 0; c < COLS; c++ )
        {
            var cell_elem = document.createElement( 'td' );
            var img_elem = document.createElement( 'img' );
            img_elem.onmouseover = mouseOverImg;
            img_elem.src = "Images/" + dogs[ 0 ];
            cell_elem.appendChild( img_elem );
            row_elem.appendChild( cell_elem );
        }
        content_elem.appendChild( row_elem );
    }
}

function mouseOverImg( evt )
{
    var idx = getRandomInt( 0, dogs.length );
    console.log( idx );
    var img_elem = evt.target;
    img_elem.src = "Images/" + dogs[ idx ];
}