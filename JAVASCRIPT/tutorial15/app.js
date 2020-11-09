let studentNames = ['Mikail', 'Priya', 'Lotte', 'Kobe', 'Elnura', 'Oguz', 'Joty', 'Yannick', 'Adnan', 'Emmanuel', 'Susan']
// console log result
// 0: "Mikail"
// 1: "Priya"
// 2: "Lotte"
// 3: "Kobe"
// 4: "Elnura"
// 5: "Oguz"
// 6: "Joty"
// 7: "Yannick"
// 8: "Adnan"
// 9: "Emmanuel"
// 10: "Susan"
///

studentNames = [
    ['Mikail', 'Priya', 'Lotte', 'Kobe'],
['Elnura', 'Oguz', 
['Joty', 'Yannick', 'Adnan', 'Emmanuel', 'Susan']
]
]

studentNames[1][2][2] = 25;
/// studentNames[1][3] = "Arne" // fill empty place in array
studentNames[1][3]=[1,2,3,4]

console.log(studentNames)
console.log(studentNames[1][2])
console.log(studentNames)
console.log(studentNames)
console.log(studentNames.toString()) 
// print all array data 


//Array Methods///

let students = ['Mikail', 'Priya', 'Lotte', 'Kobe', 'Elnura', 'Oguz', 'Joty', 'Yannick', 'Adnan', 'Emmanuel', 'Susan']


function testForArray(){
    console.log('test array')
}

let array = [
    {
        title:"test"
    },
    true,
    12,
    [1,2],
    testForArray,
]

array[4]();

//length
let ConsoleResult = students.length

//sort() sort() method sorts arrays
consoleResult = students.sort();
consoleResult = students[0] //first array element
consoleResult = students[students.lenght -1]
console.log(students.length -1)
console.log(consoleResult)
console.log(students)


// push() method

students.push("Jack")

console.log(studentNames[1][2])
studentNames[1][2].push('test')
console.log(studentNames)


////
let todoValue = document.getElementById('todoValue')
let todos = [];

function addTodo(){
    let temp = todos;
    temp.push(todoValue.value)
    console.log(temp)
    return todos = temp;
    
}

let studentDB = []
let username = document.getElementById('username')
let password = document.getElementById('password')


function addStudent(){
    let temp = studentDB;
    let person = {
        user: username.value,
        pass: password.value
    }
    temp.push(person);
    console.log(temp)
    return studentDB = temp;
}



///

// addTodo('Learn Javascript')
// addTodo('Learn IoT')
console.log(todos);


////