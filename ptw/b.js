"use strict";  
    var elemento = document.getElementById("b");  
    var objeto = document.getElementById("box3");  
    objeto.style.display = "none";  
    elemento.addEventListener("click", function(){  
        if(objeto.style.display == "none") {  
            objeto.style.display = "block";  
        } else {  
            objeto.style.display = "none";  
        }  
    }, false); 