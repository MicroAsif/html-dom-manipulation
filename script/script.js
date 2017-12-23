function Calc(operator){
    var one = document.getElementById('txt1').value;
    var two = document.getElementById('txt2').value;
    
    var numberOne = +one;
    var numberTwo = +two;
    if (operator == "+") 
        alert(numberOne+numberTwo);
    if (operator == "-")
        alert(numberOne-numberTwo);
    if (operator == "x")
        alert(numberOne * numberTwo);
    if (operator == "/")
        alert(numberOne / numberTwo)
    if (operator == "%")
        alert(numberOne % numberTwo);
    if (operator == "^")
        alert(numberOne ** numberTwo);
    };
    