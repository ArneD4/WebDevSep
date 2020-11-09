var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var result = document.getElementById('result');


function calc(){
    return result.innerText= `Result: ${Number(number1.value) + Number(number2.value)}`
}