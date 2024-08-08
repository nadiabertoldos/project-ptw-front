"use strict";  
    var kriptonita = document.getElementById("c");  
    var superman = document.getElementById("box3");  
    superman.style.display = "none";  
    kriptonita.addEventListener("click", function(){  
        if(superman.style.display == "none") {  
            superman.style.display = "block";  
        } else {  
            superman.style.display = "none";  
        }  
    }, false); 