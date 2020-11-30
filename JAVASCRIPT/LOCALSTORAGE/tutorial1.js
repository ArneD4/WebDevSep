//localStorage

let myArr = [1,2,3,4,5,6,7]

console.log(myArr)

console.log(localStorage)

localStorage.companyName = "intecbrussel"


localStorage.setItem('student','Priya,Susan,Mikail')
localStorage.setItem('scores',myArr)
localStorage.setItem('age',Number(25))


//convert data into string format
let myNewArray = JSON.stringify(myArr)
console.log(myNewArray)
//insert object in string format into localStorage
localStorage.setItem('myNewNumbers',myNewArray)

let myArrayFromStorage = localStorage.getItem('myNewNumbers')
console.log("FromStorage", myArrayFromStorage)
console.log(typeof myArrayFromStorage)

//convert array data in string format to real array data
let converted =JSON.parse(localStorage.getItem('myNewNumbers'))
console.log(localStorage.getItem('myNewNumbers'))

let students = []

let singleStudent = {
    name:"Jack",
    age:29,
    course:"Javascript"
}

students.push(singleStudent)
localStorage.setItem("allstudents",JSON.stringify(students))
let getStudentsfromStorage = localStorage.getItem('allstudents');
let convertDataForStudents =JSON.parse(getStudentsfromStorage)

console.log('withouthconvert',getStudentsfromStorage)
console.log('converted',convertDataForStudents)
console.log(students)


console.log(localStorage)

localStorage.clear();

addTodo(){

    addToUI()
    addToStorage() // array in localStorage
} 

let data = localStorage.getItem('todos') // should be converted into js object 

//documentloaded
    // use forEach
        //iterate data oject > print todo title with model
            //forEacht(){

            //innerHTML + = `<p>$'todo.title}</p>`
            //}

          