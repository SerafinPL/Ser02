 document.getElementById("box-body").onmousemove = function(event){parallax(event)};

  



function parallax(eve) {
  var x = eve.clientX;     // Get the horizontal coordinate
  var y = eve.clientY;     // Get the vertical coordinate
  var ws ="pozycja " + x + "-x " + y + "-y :P";
  var szer = document.getElementById("box-body").clientWidth;
  var wys = document.getElementById("box-body").clientHeight;
  
  document.getElementById("info").innerHTML = ws;
  
  if (x+50 < szer ){
    document.getElementById("par-div1").style.left = x + "px";
  }
   if (y+50 < wys ){
  document.getElementById("par-div2").style.top = y + "px";
   }
  
  
 /* document.getElementById("par-main").style.left = szer-x + "px";
  document.getElementById("par-main").style.top = wys-y + "px";*/
  
  x=x/5;
  y=y/5;
  szer = document.getElementById("zdjecie").clientWidth /2;
  x=x-500;
  y=y-500;
  document.getElementById("zdjecie").style.left = x + "px";
  document.getElementById("zdjecie").style.top = y + "px";
}






function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coor;
}
/*
document.getElementById("box-body").onmousemove = function(event) {myFunction(event)};

function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("info").innerHTML = coor;
}

*/