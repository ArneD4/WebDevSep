toString();
Number();
parseInt();
parseFloat;

//*//

let myNumber = 10;
let typeOfVariable = myNumber.toString();
console.log(typeOfVariable)
console.log(typeof typeOfVariable)

/////

let sum = "5"*"5";
console.log(sum)


//////

let salaryPerMonth = 1.948
//salaryPerMonth = salaryPerMonth.toExponential(4); //
salaryPerMonth = salaryPerMonth.toFixed(1);
console.log(salaryPerMonth)

/////


var myNumberVar = "1345" // string data tye
var showinConsole = parseInt(myNumberVar);

showinConsole = Number.isFinite("5");
showinConsole = Number.isInteger(5);

function fixedTheSalary(salary){
    return `Salary> ${Number.parseFloat(salary).toFixed(2)}`
}

let result = fixedTheSalary('2.456')
console.log(result)


console.log(showinConsole, typeof showinConsole)


