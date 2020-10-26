// functions


// funtion syntax
// function myFunctionName(){
//     console.log('before return function message')
//     return 'this is my first function'
//     }



// console.log(myFunctionName());//invoked


// function calculateIt(a,b){
//     console.log(a,b)
//     return a+b;
// };

//!calculateIt(5, "Jack");

// let sumResult = calculateIt(5, 6);
// console.log(sumResult);

// function getUser(userObj){
//     return userObj.firstname;
// }

// let student = {
//     firstname ='Jack',
//     lastname = 'Sparrow'
// }

// let showUserName = getUser(student)

// console.log("GetUserFunction says:", showUserName);




////


// let autoDrive = {
//     forward: function(){console.log('Forward')},
//     backward:function(){console.log('Backward')},
//     turnLeft: function(){console.log('Turn Left')},
//     turnRight: function(){console.log('Turn RIght')}
// }

// autoDrive.turnLeft();
// autoDrive;backward();
// autoDrive.turnRight();
// autoDrive.forward();

//local variables binnen functie

// let localVarible = 'This is not local varible'; // not local

// function printService(){
//     let localVarible = 'This is a local variable';
//     console.log(localVarible);
// }


// console.log(localVarible); //not local

//global variable buiten functie

// let GlobalVariable = 'This is global variable';

// function ConsoleService(){
//     console.log(GlobalVariable);
// }

// ConsoleService();


// function IntecBrussel(firstname, lastname, age, email, password) {
//     console.log(firstname, lastname, age, email, password)
// };

// IntecBrussel('Jack', 'Sparrow', 25, 'root@root.com', 'mqlkfdjqlskjf');

///




///

// var studentIntec = {
//     firstname: "Arne",
//     lastname: "Defoor",
//     age: 26,
//     email: "arne.defoor@intectbrussel.be",
//     passedTest: true,
//     driverPermit: false,
//     inClass: true,
// }

// function testFunction(myParameterName){
//         console.log(myParameterName.passedTest);
// }

// testFunction(studentIntec);

///

var something = {
    color: 'blue',
    shape: 'round',
    name: 'The Blue Circle'
}

var thing = {
    color: 'red',
    shape: 'squared',
    name: ' The Red Square'
}

var anything = {
    color: 'green',
    shape: 'line',
    name: 'The Green Line'
}

function getShape(shape){
    console.log(shape);
    return "This is " + shape.name + " the color is " + shape.color + " and the shape is a " + shape.shape + "!";
  

}

document.getElementById("print").innerHTML = "Here is your info: \n " + getShape(something);









///




