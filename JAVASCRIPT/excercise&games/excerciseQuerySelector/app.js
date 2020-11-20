///add todo + todo array///


var todoInput = document.querySelector('#todo');
var listofTodos = document.querySelector('.list-group');
var toDos = document.getElementsByTagName("li");
var addTodoBtn = document.querySelector('.switch')
let todoArray;
let count = 0;


//to do array list//

function addtodoArray(todo){
    if(todoArray === null || todoArray === undefined){
        todoArray = []; 
        todoArray.push(todo);
    }else{
        todoArray.push(todo);
    }
    console.log(todoArray)
}

//to do html list//

function addTodo(event){
    event.preventDefault();
    var li = document.createElement('li');
    var title = document.createTextNode(todoInput.value)
    li.className = "list-group-item d-flex justify-content-between"
    var a = document.createElement('a')
    a.href = "#";
    a.className = "delete-item";
    a.id = count
   // a.onclick = "removeItem(this)"
    var i = document.createElement('i')
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    listofTodos.appendChild(li)
    addtodoArray(todoInput.value)
    ///background for odd numbers///
    var nthChild = document.querySelectorAll('.list-group-item:nth-child(odd)');
    nthChild.forEach(function(todo){
    todo.className = "list-group-item d-flex justify-content-between bg-success"})
    count++
    
}

//REMOVE ITEM//
function removeItem(event){
 if(event.target.className == "fa fa-remove"){
    // console.log('THE REMOVED ELEMENT:   ',event.target.parentElement.parentElement)
    // console.log(' THE CHILDREN OF THIS:   ',this.children)
    // console.log('THE CHILDNODES OF THE REMOVED ELEMENT:     ',event.target.parentElement.parentElement.childNodes)
    var x = Number(event.target.parentElement.id)
    delete todoArray[x]
    ///console.log(x,'index position')
    // console.log('TODOS:',toDos)
   event.target.parentElement.parentElement.remove()
    console.log(todoArray)
   
 }
}

//eventlistener//

console.log(todoArray)
addTodoBtn.addEventListener('click', addTodo)
listofTodos.addEventListener('click',removeItem)
