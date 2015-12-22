var dogs = [ 'dog01.JPG', 'dog02.jpg', 'dog03.jpg', 'dog04.jpg' ];
var content_elem = document.getElementById( 'content' );

function pageLoaded()
{
    // open directory ./Images/ and read its contents
    // alert( "dogs" );
    var img_elem = document.createElement( 'img' );
    img_elem.src = "Images/dog01.JPG";
    content_elem.appendChild( img_elem );
    window.setTimeout( changeDog, 1000, img_elem, 0 );
}

function changeDog( img_elem, i )
{
    img_elem.src = "Images/" + dogs[ i ];
    window.setTimeout(
            changeDog, 1000, img_elem, ( i + 1 ) % dogs.length );
    console.log( "after setTimeout" );
}