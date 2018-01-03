function DivClicked() { 
    console.log("div clicked!");
}

function ButtonClick() { 
    console.log("button clicked!");
}



// function myFunction() {
//     var x = document.getElementById("work").value;
//     console.log(x);

//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         array.forEach(element => {
//             document.getElementById("demo").innerHTML = <p>myArr.element.name</p>;
//         });
        
//         }   
//     };
//     xmlhttp.open("GET", "../json/org.txt", true);
//     xmlhttp.send();
// }
 


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



function SubmitData() { 

    var c = document.getElementById("work").value;
    if(c=="") { 
        alert("company can't be empty");
    }

    var exp= document.getElementById("exp");
    if (exp.selectedIndex ==0) { 
        alert("Please select your experience");
    }

   


}