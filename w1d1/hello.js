  function my_fun()
  {
      var tp = document.getElementById( "third_paragraph" );
      tp.innerHTML = "<ul> <li>A</li> <li>B</li> </ul>";
      weird = "WEIRD";
      // alert( "Fun alert " + tp );
      // alert( "alert 2" );
      fun2( tp, "More Textttttt" );
  }
  function fun2( param1, p2 )
  {
     alert( weird );
     // alert( tp ); crashes because tp in not declared!
     alert( p2 + param1 );
  }

  function update_clock()
  {
    var clock_elt = document.getElementById( "clock" );
    var now = new Date();
    clock_elt.innerHTML = "A" + now.toLocaleTimeString();
    setTimeout( update_clock2, 1000 );

    // No!!!
    // var xxx = update_clock2();
    // setTimeout( xxx, 1000 );
  }

  function update_clock2()
  {
    var clock_elt = document.getElementById( "clock" );
    var now = new Date();
    clock_elt.innerHTML = "B" + now.toLocaleTimeString();
    setTimeout( update_clock, 1000 );
  }
