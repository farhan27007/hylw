// Add act-btn class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("tes-bt");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("act-btn");
    current[0].className = current[0].className.replace(" act-btn", "");
    this.className += " act-btn";
  });
}