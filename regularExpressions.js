console.log( "ABC" );

var r01 = /abc/;.
console.log( r01 );

console.log( "01", "abc".search( r01 ) );
console.log( "02", "ac".search( r01 ) );
console.log( "03", "sdfsdfabcgfgdf".search( r01 ) );

var r02 = /ab*c/;
console.log( "04", "abc".search( r02 ) );
console.log( "05", "ac".search( r02 ) );
console.log( "06", "abbbbbbbbc".search( r02 ) );
console.log( "07", "abbbbxbbbbc".search( r02 ) );

var r03 = /^abc$/;
console.log( "08", "abc".search( r03 ) );
console.log( "09", "1abc".search( r03 ) );
console.log( "10", "abc2".search( r03 ) );

var r04 = /ab[def]c/;
console.log( "11", "abdc".search( r04 ) );
console.log( "12", "abec".search( r04 ) );
console.log( "13", "abfc".search( r04 ) );
console.log( "14", "abgc".search( r04 ) );

var r05 = /ab.c/;
console.log( "15", "abdc".search( r05 ) );
console.log( "16", "abec".search( r05 ) );
console.log( "17", "abfc".search( r05 ) );
console.log( "18", "abgc".search( r05 ) );
console.log( "19", "abc".search( r05 ) );

var r06 = /^a{0,5}$/;
console.log( "20", "aaa".search( r06 ) );
console.log( "21", "aaaaa".search( r06 ) );
console.log( "22", "aaaaaa".search( r06 ) );

var r07 = /b+/g;
var match = "a b a bbbb a bbbbb".match( r07 );
console.log( match );


