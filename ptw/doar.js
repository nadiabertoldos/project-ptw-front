"use strict";  
    var switchText = document.getElementById("a");  
    var elToggled = document.getElementById("box2");  
    elToggled.style.display = "none";  
    switchText.addEventListener("click", function(){  
        if(elToggled.style.display == "none") {  
            elToggled.style.display = "block";  
        } else {  
            elToggled.style.display = "none";  
        }  
    }, false); 