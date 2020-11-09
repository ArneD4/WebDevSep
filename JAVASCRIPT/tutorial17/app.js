// Math Object

var result;

//PI number

result = Math.PI

//Round() method
result = Math.round(9.3) //9
result = Math.round(9.6) //10

//Power method()

result = Math.pow(8,2)

//Square Root method

reuslt = Math.sqrt(64)

//Absolute positive value {abs}
result = Math.abs(-9.5)

//Sin and Cos
/**
 * math:sin(90*math:pi()/ 180)
 * */

 result = Math.sin(90* Math.PI / 180);
 result = Math.cos(90* Math.PI / 180);

 //Max and Min methods

 // max
 result = Math.max(33,44,55,34,57,65);

 // min
 result = Math.min(33,44,55,34,57,65);


 let numbers = [22,56,67,43,29,18,34]

 result = Math.min(...numbers);

 // Generate random numbers

 result = Math.round(Math.random()*100)+1


function RandomNumberGenerator(min,max){
    console.log("math",(max - min + 1)+ min)
    return Math.round(Math.random()*(max-min+1) + min);
}

let generator = RandomNumberGenerator(15,20)
console.log(generator, "test")

// Data Object
result = new Date();


//getFullYear()
// result = new Date().getFullYear();
var fullYear = result.getFullYear();
console.log(fullYear);

// get current month
result = result.getMonth();

//toLocalString
result = new Date();
let opt = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
result = result.toLocaleString('fr-BE',opt);
result = new Date();
//seconds, minutes, hours

result = result.getSeconds();
result = new Date().getMinutes();
result = new Date().getHours();
result = `${result.getHours()}:${result.getMinutes()}:${result.getSeconds()}`

let nl_days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
console.log(nl_days)
result = nl_days[new Date().getDay()];



result = new Date().getDay();


 console.log(result);