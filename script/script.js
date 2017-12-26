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
    