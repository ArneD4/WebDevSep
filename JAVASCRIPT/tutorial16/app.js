//// ARRAY METHODS ////

let myNumberArray = [1,2,3,4,5,67,77,88,44,33,34,56,5,4,99];
let myStringArray = ["Comedy","Horror","Action","Thriller","Sci-FI","Fantasy"];
let students = [
    {fullname:"Jack Sparrow", age:25, profession:"Pirate"},
    {fullname:"Marie Jane", age:42, profession:"Farmer"},
    {fullname:"Spack Jarrow", age:12, profession:"CEO"},
    {fullname:"Fat Pig", age:23, profession:"Popo"},
]

/*

method:push()
the push() method adds element at the end of an array

*/

// myNumberArray.push(1000)
myStringArray.push("Drama")

let newStudent = {
    fullname:"Drema J. Hull", age:34, profession:"Smoker"
}

students.push(newStudent)

/*
method: join()
 the join()method also joins all array elements into a string
*/

//console.log(myNumberArray.join())


/* 
method: pop()
the pop() method removes the last element of an array
*/

//myStringArray.pop();
//students.pop();



/* method: shift()
the shift() method removes the first element of an array
*/
myStringArray.shift();
myStringArray[0] = "Documentary" // changed the value of the [0] element in the array

/* method: some()
    the some() mehtod checks if any of the elements in an array pass a test
*/

function someFunction(value){
    return value >=10
}

let some_Result = myNumberArray.some(someFunction)
console.log(some_Result);


/*
method: every()
    the every() method checks if all elements in an array pass a test
*/

function everyFunction(value){
    return value>=10
}

let every_result = myNumberArray.every(everyFunction)
console.log(every_result)


/* method: reduce()
the reduce() method reduces the array to a single value

*/

function reduceFunction(accumulator,currentValue,currentIndex){
    console.log(currentIndex)
    return `${accumulator} ${currentValue}`
}

let reduceResult = myNumberArray.reduce(reduceFunction)
console.log("Reduce Result", reduceResult)

/*
method: forEach()
the forEach()method calls a function once for each element in an array, in order.
array.forEach(function(currentValue,index,arr), thisValue)
*/

let listofStudents = document.getElementById('students')

//myNumberArray.forEach(forEachFunction)
students.forEach(forEachFunction)

function forEachFunction(val,index){
    console.log("forEach Method",index,":",val)
    console.log(val.fullname)
    listofStudents.innerHTML += `<li>${val.fullname}</li>`
}

/*
method: unshift()
    the unshift() method adds new items to the beginning of an array, and returns the new length */
// difference beween push and unshift
myNumberArray.unshift(4000)
myNumberArray.push(9000)
// difference beween push and unshift

/*
method: map()
    The map() method creates a new array with the results of calling a function for every array element.
    */

    function mapCallBackFunction(value,index,currentArr){
        console.log(`index:${index} value:${value.fullname}`)
    }
//myNumberArray.map(mapCallBackFunction)

students.map(mapCallBackFunction)

/*
method: flat()
    convert multidimensional arrays into single dimensional array
*/

let multidimensionalArr = [1,2,3,4,[5,6,7,8,[9,10]]]
console.log(multidimensionalArr)
let dimensional = multidimensionalArr.flat(Infinity)
console.log('flat array', dimensional)

/* filter()
    filter method creates an array filled with all array elements that pass a test
*/
//==> get all elements greater then this number 
function findNumberByInput(value){
    return value >= 30
}

let filterResult= myNumberArray.filter(findNumberByInput)
console.log('filter result all numbers equal to or bigger then 30 in array',filterResult)


function findOldPeople(obj){
    return obj.age >= 27
}

console.log(students.filter(findOldPeople),"filter obj old people")
//==> get all elements greater then this number 


/* method: sort()
        The sort() method sorts the items of an array



*/

myNumberArray.sort(function(a,b){return b-a});
var strings= ['f','s','e','l','q','x']
strings.sort();
console.log('mauw',strings)
console.log(myNumberArray)

/*
method: findIndex()
        the findIndex() method returns the index of the first element in ana array that pass a test (provided as a function*/

function findIndexByValue_negative(value){
        return value >=10000
}

function findIndexByValue_positive(value){
        return value >=60
}

let negative_result = myNumberArray.findIndex(findIndexByValue_negative)
let positive_result = myNumberArray.findIndex(findIndexByValue_positive)
console.log(`Negative:${negative_result}\nPositive:${positive_result}`)


/*
method: find()
    the find() method returns the value of the first element in an array that pass a test
*/
let _students = [
    {name:"Jack", age:25},
    {name:"Jos", age:45},
    {name:"Jeff", age:34}
]

function findStudent(student){
    return student.name === "Jeff"
}

let studentResult= _students.find(findStudent)

console.log(studentResult)

/*
method: concat()
        is used to join two or more arrays
*/

let oldArray= [1,2,3,4,5,'string']
let newArray= [true,{hello:"world"}]
let updateArr = oldArray.concat(newArray)

updateArr = updateArr.concat('Hello world', 34,35)
console.log(updateArr)


/*
method: fill()
fill all the array elements with a static value */

myNumberArray = myNumberArray.fill('none')
console.log(myNumberArray)




/**includes()
 * returns true if the array contains teh element, false if not
 */

myNumberArray = [1,2,3,4,5,67,77,88,44,33,34,56,5,4,99];

let isNumberExist = myNumberArray.includes(77)
console.log('includes',isNumberExist)

///

function checkNumber(obj,value){
    let isExist = obj.includes(value);
    if(isExist === false){
        console.log('this number is not in array')
    }else{
        console.log('this number is in this array')
    }
}

checkNumber(myNumberArray,33);


/**
 * reverse()
 * reverse the order of the elements in the array
 */

 myNumberArray = myNumberArray.reverse();
 console.log(myNumberArray)

 


console.log('myNumberArray', myNumberArray)
console.log('myStringArray', myStringArray)
console.log('students', students)