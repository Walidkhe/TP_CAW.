var b1 = document.querySelectorAll(".boundary");
var b = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var win = true;

start.addEventListener("mouseover", function() {
  
    document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
    for (var i = 0; i < b.length; i++) {
      b[i].addEventListener("mouseover", function() {
        
        win = false;
        this.style.background = "red";
        document.getElementById("status").innerHTML = "YOU LOSE!"
        stopPropagation();
        
      })

      if (win == false) {
        b[i].style.background = "#eeeeee";
        
      }
      ;
    }
    end.addEventListener("mouseover", function() {

      win = true;
      if (win == true) {
        document.getElementById("status").innerHTML = "YOU WIN!";
        
      }
    });
    
});
 

