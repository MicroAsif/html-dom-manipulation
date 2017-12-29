function Calc(operator){
    var one = document.getElementById('txt1').value;
    var two = document.getElementById('txt2').value;

    var r = document.getElementById("result"); 
    
    var numberOne = +one;
    var numberTwo = +two;
    if (operator == "+") 
        r.innerText ='result :  ' + (numberOne  +numberTwo);
    if (operator == "-")
        r.innerText ="result :  " + (numberOne - numberTwo);
    if (operator == "x")
        r.innerText ="result :  " + (numberOne * numberTwo);
    if (operator == "/")
        r.innerText ="result :  " + (numberOne / numberTwo);
    if (operator == "%")
        r.innerText ="result :  " + (numberOne % numberTwo);
    if (operator == "^")
        r.innerText ="result :  " + (numberOne ** numberTwo);
};


var images = ["1.jpg", "2.jpg", "3.jpg"];
var counter = 1;
function change(value) { 
    
    if(value=='n'){
        var img = document.getElementById("imgholder");	
        img.src = images[counter--];
        if(counter==0)
            counter = images.length-1;
    }else{
        var img = document.getElementById("imgholder");	
        img.src = images[counter++];
        if(counter==images.length)
            counter = 0;
    }
}



function ReserVationCheck() { 
    var checks = document.getElementsByName('resCheck'); 
    var checkRes = [];

    for (var i=0; i<checks.length; i++) {
        if (checks[i].checked) {
            alert(checks[i].value);
            checkRes.push(checks[i].value);
        }
    }
    if (checkRes.length <= 0){ 
        alert("no seat is selected!");
    }
  
}