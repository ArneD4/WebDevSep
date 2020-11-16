// switch statement


/////1/////

var number = 5;

switch(number){
    case 0:
        console.log('0')
    case 3:
        console.log('3')
    case 5:
        console.log('5')
        break;
    default:
            console.log('this is default')    
}

////2////
console.log('')
switch(new Date().getDay()){
    case 0:
        console.log("Zondag")
    case 1:
        console.log("Maandag")
    case 2:
        console.log("Dinsdag")
    case 5:
        console.log('FIRDAYYYYY')
}


/// for loops / while / if else
console.log('')
var correctAnswer = "jackie"

function getAnswer(param){
    console.log("It is correct answer ==> ", param)
}


switch(correctAnswer){
    case "jackie":
        getAnswer(correctAnswer)
        break
    case "Michael":
        console.log("test");

    default: 
        console.log("testing switch")
}


////
console.log('')


switch(true){
    case true:

    case false:

    default:


}