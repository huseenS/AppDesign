var sel_elem = document.getElementById( 'selector' );
var table_elem = document.getElementById( 'the_table' );

function readTheFile()
{
    console.log( sel_elem.files[ 0 ] );
    var reader = new FileReader();
    reader.onload = fileReadFinished;
    reader.readAsText( sel_elem.files[ 0 ] );
    console.log( "Reading..." );
}

function fileReadFinished( evt )
{
    table_elem.border = 1;
    // /(ab)*/
    // var address_pattern = /(\d{1,3}\.){3}\d{1,3}/;
    var address_pattern = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/;
    var timestamp_pattern = /\[(.*)\]/;
    // console.log( evt.target );
    var reader = evt.target;
    var content = reader.result;
    var lines = content.match( /^.*((\r\n|\n|\r)|$)/gm );

    for( var i = 0; i < lines.length; i++ )
    {
        // console.log( i, lines[i] );
        var row_elem = document.createElement( 'tr' );
        var addr1_cell = document.createElement( 'td' );
        var addr2_cell = document.createElement( 'td' );
        var addr3_cell = document.createElement( 'td' );
        var addr4_cell = document.createElement( 'td' );
        var time_cell = document.createElement( 'td' );
        var matches = lines[i].match( address_pattern );
        addr1_cell.appendChild( document.createTextNode( matches[ 1 ] ) );
        addr2_cell.appendChild( document.createTextNode( matches[ 2 ] ) );
        addr3_cell.appendChild( document.createTextNode( matches[ 3 ] ) );
        addr4_cell.appendChild( document.createTextNode( matches[ 4 ] ) );
        var matches = lines[i].match( timestamp_pattern );
        console.log( matches );
        time_cell.appendChild( document.createTextNode( matches[ 1 ] ) );

        table_elem.appendChild( row_elem );
        row_elem.appendChild( addr1_cell );
        row_elem.appendChild( addr2_cell );
        row_elem.appendChild( addr3_cell );
        row_elem.appendChild( addr4_cell );
        row_elem.appendChild( time_cell );
    }
}