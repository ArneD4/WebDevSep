//input field
let todoInput = document.querySelector('#todoInput')
let addToDoBtn = document.querySelector('#addTodo')
let clearAll = document.querySelector('#delete')
let searchInput = document.querySelector('#filter')
let searchBtn = document.querySelector('#search')
let clearSearchBtn = document.querySelector('#clear')
let listofToDos = document.querySelector('.list-group')
var toDos = document.getElementsByTagName("li");

//create HTML-element function
const x = t => document.createElement(t)
//

//event listeners

//add
addToDoBtn.addEventListener('click', e => {
    e.preventDefault()
    let newToDo = new ToDo(todoInput.value)
    newToDo.addToDo()
    newToDo.addToStorage()
    
})

//remove
listofToDos.addEventListener('click', e=>{
    if(e.target.className === "fa fa-remove"){
    let deleteToDo = new ToDo(e.target.parentElement.parentElement)
    deleteToDo.removeToDo(event)
    }
})

//clear all
clearAll.addEventListener('click',() => {
    localStorage.clear()
    listofToDos.innerHTML=""
});

//search to do
searchBtn.addEventListener('click',(e) => {
    e.preventDefault();
    var innerToDo;
    for(i=0;i<toDos.length;i++){
        innerToDo=toDos[i].innerText;
        if(searchInput.value === innerToDo){
            toDos[i].style.border="thick solid green"
            console.log('searching')
            console.log(toDos[i])
        }else{
            toDos[i].style.borderColor="white"
        }
    }
})
//clear search
clearSearchBtn.addEventListener('click',function(event){
    for(i=0;i<toDos.length;i++){
        toDos[i].style.borderColor="white"
    }
})


// To Do Class

class ToDo{
    constructor(){
    }
    addToDo(){
        let li = x('li');
        li.className = "list-group-item bg-dark rounded-pill d-flex justify-content-between text-light p-2 m-3";
        li.style.borderColor="white"
        let title = document.createTextNode(todoInput.value);
        let a = x('a');
        a.href = '#';
        a.className = "delete-item";
        let i = x('i');
        i.className = "fa fa-remove";
        i.style = "color:white"
        a.appendChild(i)
        li.appendChild(title)
        li.appendChild(a)
        return listofToDos.appendChild(li)
    }
    addToStorage(){
        let temp = getDataStorage();
        temp.push(todoInput.value)
        localStorage.setItem('data',JSON.stringify(temp))
    }

    removeToDo(event){
        let li = event.target.closest('li')
        var tempArr = Array.from(listofToDos.children)
        var index = tempArr.indexOf(li)
        let todos = getDataStorage()
        todos.splice(index,1)
        localStorage.setItem('data',JSON.stringify(todos));      
        event.target.parentElement.parentElement.remove();
    }
    
}

//set & local Storage
const getDataStorage = () => {
    let temp;
    if(localStorage.getItem('data') === null){
        temp = [];
    }else{
        temp = JSON.parse(localStorage.getItem('data'))
    }
    return temp;
}
document.addEventListener('DOMContentLoaded', () => { 
    let temp = getDataStorage();
    temp.forEach(setTodo)
    function setTodo(item){
        todoInput.value = item //otherwise addToDO() will not recognize input
        let loadTodos = new ToDo(todoInput.value)
        loadTodos.addToDo()
    }
    
})


//date picker
// var datepicker = new tui.DatePicker('#wrapper', {
//     date: new Date(),
//     input: {
//         element: '#datepicker-input',
//         format: 'yyyy-MM-dd'
//     }
       
// });
// let date = new Date()
// var temp = JSON.stringify(date)

// date = temp.substring(1,11)
// console.log(date)

