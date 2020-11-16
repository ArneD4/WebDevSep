toString();
Number();
parseInt();
parseFloat;

//*//
console.log('')
console.log('//1//number to string: toString()')
let myNumber = 10;
let typeOfVariable = myNumber.toString();
console.log('before toString();: ',myNumber)
console.log('before toString(); type is: ',typeof myNumber)
console.log('after toString();: ',typeOfVariable)
console.log('after toString(); type is: ',typeof typeOfVariable)


/////
console.log('')
console.log('//2//sum:')
var x = 5
let sum = x*"5";
console.log(sum)


//////
console.log('')
console.log('//3//salary per month: (toExponential & toFixed)')
let salaryPerMonth = 1.948;
let salaryPerMonth2 = 1.948;
salaryPerMonth = salaryPerMonth.toExponential(4); 
salaryPerMonth2 = salaryPerMonth2.toFixed(4);
console.log(salaryPerMonth, '=> EXPONENTIAL');
console.log(salaryPerMonth2, '=> FIXED');

/////
console.log('')
console.log('//4//parseInt => string to number')
var myNumberVar = "1345" // string data tye
var showinConsole = parseInt(myNumberVar);
console.log(myNumberVar,' => here it\'\s a string')
console.log(showinConsole,' => here it\'\s a number after parseInt')

//
console.log('')
console.log('//5// isFinite & isInteger')
showinConsole = Number.isFinite("5");
console.log(showinConsole, 'is "5" isFinite true or false? false => NaN')
showinConsole = Number.isInteger(5);
console.log(showinConsole, 'is 5 isInteger true or false?')
console.log(showinConsole, typeof showinConsole)
////

console.log('')
console.log('//6//parseFloat takes number out of string , only if string starts with number and returns only the number')
function fixedTheSalary(salary){
    return `Salary> ${Number.parseFloat(salary).toFixed(2)}`
}

let result = fixedTheSalary('3.456 hello 44')
console.log(result)





