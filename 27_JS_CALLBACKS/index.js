// JS CALLBACKS

// A callback is a function passed as another arguement to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

// Example: 


function scriptloader(src, callback){
    var scrpt = document.createElement("script");
    scrpt.src = src;
    scrpt.onload = function(){
        console.log("Script loaded: "+ src);
        callback(src);
    }
    scrpt.onerror = function(){
        console.log("Error with the script: "+ src);
    }
    document.body.appendChild(scrpt);
}

function display(src){
    alert(src + " Loaded.");
}

scriptloader("https://cdn.jssdfdsfdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", display);

