/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var modal = document.getElementById("myModal");

var imgs = document.getElementsByClassName("mini-img");

var kurDeg= 0;

document.getElementById("img01").onmousemove = function(event){dziubek(event)};

document.getElementById("img01").onmouseleave = function(){dziubekOut()};

document.getElementById("img01").onclick = function() {kursor_click()};

document.getElementById("close").onclick = function() {close_modal()};

document.getElementById("l_arr").onclick = function() {swich_modal("l")};

document.getElementById("r_arr").onclick = function() {swich_modal("r")};

/*--- MODAL Przypisanie funkcji do wszystkich zdjęć ---*/
(function rooter() {

  for (var i=0; i < imgs.length ; i++)
  {
    imgs[i].onclick = function() {display_modal()};
    console.log(imgs[i].onclick + " "+i);
  }
  
    
})();



/*--- MODAL ---*/

function display_modal() {
  
    document.getElementById("caption").innerHTML = event.target.alt ;
    document.getElementById("img01").setAttribute("src", event.target.src);
    modal.style.display = "block";
        
}  

function close_modal() {
    modal.style.display = "none";
}

function swich_modal(n) {
  var zdj;
  for (var i=0; i < imgs.length ; i++)
  {
    if (imgs[i].src == document.getElementById("img01").src) {
      zdj = i;
    };
    
  }
  switch(n) {
  case "l":
      
      zdj--;  
      if (zdj < 0 ){zdj = imgs.length - 1};
    break;
  case "r":
      zdj++;
      if (zdj > imgs.length - 1 ){zdj = 0};
    break;
  }
  
  
  document.getElementById("img01").src = imgs[zdj].src; 
  document.getElementById("caption").innerHTML = imgs[zdj].alt;
}


window.onclick = function() { 
  
  if (event.target.id == "myModal" || event.target.id == "caption" ) {
      close_modal();
  }
}

/*--- IMG KURSOR ---*/

function dziubek(eve) {
	var x = eve.clientX;     // Get the horizontal coordinate
	var y = eve.clientY;     // Get the vertical coordinate
	var kur = document.getElementById("kursor");
	
	
	kur.style.visibility = "visible" ;
	kur.style.top = y + "px";
	kur.style.left = x + "px";
	
	var polowa = event.target.clientWidth / 2;
	
	var srodek = (event.target.clientWidth / 2) + event.target.offsetLeft;
	
	
	
	
		if ( x < srodek) {
			kur.style.transform = "rotate(" + 45 + "deg)";
			kurDeg = 45;
			/*for (; kurDeg >= 45 ; kurDeg--){	
				kur.style.transform = "rotate(" + kurDeg + "deg)";
				
				
			}*/
		
		} else {
			kur.style.transform = "rotate(" + 225 + "deg)";
			kurDeg = 225;
			/*for (; kurDeg <= 225 ; kurDeg++){	
				kur.style.transform = "rotate(" + kurDeg + "deg)";
				
				
			}*/
		}
		
		

    
	
	document.getElementById("caption").innerHTML = (x < srodek) + " : " + kurDeg;
}

function dziubekOut() {
	var kur = document.getElementById("kursor");
	kur.style.visibility = "hidden" ;
}

function kursor_click() {
	
	if (kurDeg == 45) {
		swich_modal("r");
	}
	if (kurDeg == 225) {
		swich_modal("l");
	}
	
}











// prints "hi" in the browser's dev tools console
console.log("hi");