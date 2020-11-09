

////////EXCERCISES FUNCTIONS//////////////

//1//

function myFucntion() {
    console.log('hello world!')
    return 'everyone hello!'
    console.log('what\'\s up?')
}
console.log(myFucntion());


//2//

function calcIt(a,b) {
    console.log(a,b)
    return a+b;
}
let sumResult = calcIt(400, 20);
console.log(sumResult);


//3//

function getUser(userObj) {
    return userObj.firstname + ' ' + userObj.lastname;
}

let user = {
    firstname: "Bob",
    lastname: "Marley",
}

let user2 = {
    firstname: "Joske",
    lastname: "Vermeulen"
}

let showUsername = getUser(user);
console.log("the user name is:" ,showUsername)


//4//

let autoDrive = {
    forward: function(){console.log('forward')},
    backward: function(){console.log('backward')},
    left: function(){console.log('left')},
    right: function(){console.log('right')}
}

autoDrive.forward();
autoDrive.left();

//5//

    //local & global variables//
    let globalVariable = 'This is global' // global variable ==> can always call this


function printService(){
    let localVariable = 'This is local'
    console.log(localVariable)
}

printService();
//console.log(localVariable); //undefined because variable only visable inside of function ==> local
console.log(globalVariable); //==> global

//6//

function userID(firstname, lastname, age, email, password){
    console.log(firstname,lastname, age, email, password)
}

userID('Arne', 'Defoor', 26, 'arne@defoor.be', 'pass123');
