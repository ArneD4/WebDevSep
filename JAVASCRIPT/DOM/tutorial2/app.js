// navigation in dom tree

console.log(' ')
console.log('//1//')

var CardBody = document.querySelectorAll('.card-body')
var listofTodos = document.querySelector('.list-group')
var singleTodo = document.querySelector('.list-group-item:nth-child(5)')
var nthChildsofTodos = document.querySelectorAll('.list-group-item:nth-child(even)')

console.log(nthChildsofTodos, ' = even items in list')
console.log(listofTodos, ' = list-group id')
console.log(singleTodo, 'the fifth item in the list')


nthChildsofTodos.forEach(function(todo){
    todo.className="list-group-item d-flex justify-content-between bg-secondary"
}) // => gives all the even elements of the list a grey(secondary) background

// child nodes
console.log(' ')
console.log('//2//')
var ConsoleResult;
//ConsoleResult = listofTodos.childNodes[0];
ConsoleResult = listofTodos.children[0];
console.log("Console Result>",ConsoleResult)

console.log(' ')
console.log('//3//')
let arr  = [1,2,3,4,5,6,"this is last item"]
console.log(arr[arr.length-1], ' ===> getting the last item of an array by using array.length-1')
console.log(arr[arr.length-2], ' ===> getting the second last item of an array by using array.length-2')


console.log(' ')
console.log('//3 ==> CHANGING THE INNER HTML OF AN ITEM//')
ConsoleResult.innerHTML="This is todo title - new "

console.log(' ')
console.log('//4//')
ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.children[1].textContent="Title has been updated";
//==> changed the title of card body




ConsoleResult = ConsoleResult.firstElementChild
ConsoleResult = CardBody[1];
//ConsoleResult = ConsoleResult.childElementCount;
//ConsoleResult = ConsoleResult.children.length;
//ConsoleResult = ConsoleResult.lastElementChild
// try all above


// nextElementSibling 

//ConsoleResult = singleTodo.nextElementSibling;

// previousElement
//ConsoleResult = singleTodo.previousElementSibling
ConsoleResult = singleTodo.nextElementSibling.nextElementSibling
ConsoleResult = singleTodo.previousElementSibling.previousElementSibling

console.log("Result", ConsoleResult)