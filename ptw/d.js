"use strict";  
    var thanos= document.getElementById("d");  
    var vingadores= document.getElementById("box4");  
    vingadores.style.display = "none";  
    thanos.addEventListener("click", function(){  
        if(vingadores.style.display == "none") {  
            vingadores.style.display = "block";  
        } else {  
            vingadores.style.display = "none";  
        }  
    }, false); 