
////

console.log('')
console.log('//1//')
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
    ['Elnura', 'Oguz', ['Joty', 'Yannick', 'Adnan', 'Emmanuel', 'Susan']]]
studentNames[1][2][2] = 25; ///Adnan ==> 25
/// studentNames[1][3] = "Arne" // fill empty place in array
studentNames[1][3]=[1,2,3,4]

console.log(studentNames,'==>student names')
console.log(studentNames[1][2],'==>student names [1][2]')
console.log(studentNames.toString(),'==>student names to string') 
// print all array data 


//Array Methods///
console.log('')
console.log('//2//')
let students = ['Mikail', 'Priya', 'Lotte', 'Kobe', 'Elnura', 'Oguz', 'Joty', 'Yannick', 'Adnan', 'Emmanuel', 'Susan']


//3//
console.log('')
console.log('//3//')
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
console.log('this is the array ==>   ',array)
console.log('elements of arra + type')
console.log(array[0],typeof array[0])
console.log(array[1],typeof array[1])
console.log(array[2],typeof array[2])
console.log(array[3],typeof array[3])
console.log(array[4],typeof array[4])
array[4]();

console.log('')
console.log('//4//length - sort')
//length
let ConsoleResult = students.length

//sort() sort() method sorts arrays
console.log('nog niks veranderd', students)
consoleResult = students.sort();
console.log('students sorted ==> ',consoleResult)
consoleResult = students[0] //first array element
console.log('first element of array ==> ', consoleResult)
consoleResult = students[students.length -1]
console.log('students[students.length -1] => zoekt voorlaatste element uit volledige lengte van de rij ==> ',consoleResult)
console.log('students length -1 => aantal elementen in rij -1 ==>', students.length -1)



// push() method
console.log('')
console.log('//5//push method')

console.log('nog niks veranderd', students)
students.push("Jack");
students.push('test');
console.log('elements have been added at the end of the array',students);


////
console.log('')
console.log('//6//addTodo')
let todoValue = document.getElementById('todoValue')
let todos = [];
console.log(todos,'lege array')

function addTodo(){
    let temp = todos;
    temp.push(todoValue.value)
    console.log(temp,'this is the new todo item -temp in function-')
    return todos = temp;   
}
console.log(todos,'==> to do in array')


//////


console.log('')
console.log('//6//addUser')

let studentDB = []
let username = document.getElementById('username')
let password = document.getElementById('password')

console.log(studentDB,'still empty')

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




