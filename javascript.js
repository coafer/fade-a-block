
//Making element to grow

document.getElementById("button1").addEventListener("click", function () {

    document.getElementById("box").style.height = "250px";
});

//Making element to change its color

document.getElementById("button2").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";

});


//Making element to fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

var el = document.querySelector('#box');
var btn = document.querySelector('#button3');

btn.addEventListener('click', function(e){
    fadeOut(el);
});


//Reset styles

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.opacity = "1";

});



