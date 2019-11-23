/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var modal = document.getElementById("myModal");

var imgs = document.getElementsByClassName("mini-img");

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














// prints "hi" in the browser's dev tools console
console.log("hi");