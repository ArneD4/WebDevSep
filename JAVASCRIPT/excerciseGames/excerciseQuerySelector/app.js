//declare var, let, const//
var todoInput = document.querySelector('#todo');
var listofTodos = document.querySelector('.list-group');
var toDos = document.getElementsByTagName("li");
var addTodoBtn = document.querySelector('.switch')
var clearAll = document.querySelector('#clear-todos')
var taskCount = document.querySelector('#taskCount')
var taskComp = document.querySelector('#taskComp')
let todoArray;
let count = 0;
var taskComplete = 0;

console.log(localStorage)

//SET INPUT TO LOCAL STORAGE//
const addTodoToStorage = title => {
    let temp = getDataStorage(); // current array (todolist) in localStorage
    temp.push(title);
    localStorage.setItem('data',JSON.stringify(temp));
}

//SET INPUT TO TODO ARRAY LIST//
// const addTodoToArray = todo => {
//     if (todoArray === null || todoArray === undefined) {
//         todoArray = []; // init array
//         console.log('array initialized')
//         todoArray.push(todo)
//     } else {
//         todoArray.push(todo)
//     }
//     console.log('hi',todoArray)
// }

//ADD TODO FROM INPUT//
const addTodo = event =>{
    event.preventDefault();
    let tmp = todoInput.value
    makeTodo(tmp);
    addTodoToArray(todoInput.value);
    addTodoToStorage(tmp);
}
addTodoBtn.addEventListener('click', addTodo);


//HTML ELEMENT CREATOR//
//const tagNameGenerator = t => document.createElement(t)
const x = t => document.createElement(t)



//LOAD LIST FROM LOCAL STORAGE ==> DOMContentLoaded//
const getDataStorage = () => {
    let temp;
    if (localStorage.getItem('data') === null) {
        temp = []
    } else {
        temp = JSON.parse(localStorage.getItem('data'))
    }
    return temp;
}






//ADD TODO TO HTML//
const makeTodo = todo_title => {
    let li = x('li');
    let title = document.createTextNode(todo_title)
    li.className = "list-group-item d-flex justify-content-between"
    let a = x('a');
    a.href = "#";
    a.className = "delete-item";
    a.id = count;
    count++  ;
    let i = x('i');
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    return listofTodos.appendChild(li) 
}






// //load list to inner HTML
document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();
    let temp = getDataStorage();
    temp.forEach(todo => makeTodo(todo))
})

//REMOVE ITEM//
function removeItem(event){
 if(event.target.className == "fa fa-remove"){
    event.target.parentElement.parentElement.remove();
    //let indx = Number(event.target.parentElement.id);
    //console.log(indx)
    //console.log(todoArray[indx])
 }
}
listofTodos.addEventListener('click',removeItem)

//REMOVE ALL TO DOS///
const removeAllTasks = () =>{
    listofTodos.innerHTML = ""
    todoArray = [];
    localStorage.setItem('data', [" "])
}
clearAll.addEventListener('click', removeAllTasks);


//TASK COUNTER//

console.log(listofTodos.lastChild)




//SEARCH TODO//
var searchInput = document.querySelector('#filter')
var searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click',function(){
    console.log(searchInput.value)
    console.log(listofTodos.querySelectorAll("li"))
    var innerTodo;
    for(i=0;i<toDos.length; i++){
        innerTodo = toDos[i].innerText;
        console.log(innerTodo)
        if(searchInput.value === innerTodo){
           console.log('same')
           toDos[i].style.backgroundColor="yellow"
        }else{
            console.log('not the same')
            toDos[i].style.backgroundColor="white"
        }
    }
})

var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});

