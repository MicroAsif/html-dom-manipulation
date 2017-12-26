var check = document.getElementById("current");
check.checked = true;
var end = document.getElementById("endWork").style.visibility = "hidden";

function checkState(){
    if (check.checked) {
       var end = document.getElementById("endWork").style.visibility = "hidden";
       var msg = document.getElementById("msg").innerText = "to present";
    }
    else { 
        var end = document.getElementById("endWork").style.visibility = "visible";
        var msg = document.getElementById("msg").innerText = "to";
    }
}