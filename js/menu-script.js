

document.getElementById("menuBox").onclick = function() {funcMenu()};

function funcMenu() {

    var kr1 = document.getElementById("kres1");
    var kr2 = document.getElementById("kres2");
    var kr3 = document.getElementById("kres3");
    var men = document.getElementById("navMenu");
    var sec = document.getElementById("secMain");

      if (kr1.classList.contains("kres1ANON")){

        kr1.classList.remove("kres1ANON");
        kr1.classList.add("kres1ANOFF");
        kr2.classList.remove("kres2ANON");
        kr2.classList.add("kres2ANOFF");
        kr3.classList.remove("kres3ANON");
        kr3.classList.add("kres3ANOFF");
        men.classList.remove("navOn");
        men.classList.add("navOff");
        sec.style.width = "100%";
        sec.style.transitionDelay = "500ms";



      } else {

        kr1.classList.remove("kres1ANOFF");
        kr1.classList.add("kres1ANON");
        kr2.classList.remove("kres2ANOFF");
        kr2.classList.add("kres2ANON");
        kr3.classList.remove("kres3ANOFF");
        kr3.classList.add("kres3ANON");
        men.classList.remove("navOff");
        men.classList.add("navOn");
        sec.style.width = "71%";
        sec.style.transitionDelay = "0ms";
      }



}
