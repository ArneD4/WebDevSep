
///



var nthChild = document.querySelectorAll('.list-group-item:nth-child(odd)');

///

nthChild.forEach(function(todo){
    todo.className = "list-group-item d-flex justify-content-between bg-success"
})
///add todo + todo array


var todoInput = document.querySelector('#todo');
var listofTodos = document.querySelector('.list-group');
var addTodoBtn = document.querySelector('.switch')
console.log(addTodoBtn)

let todoArray;
function addtodoArray(todo){
    if(todoArray === null || todoArray === undefined){
        todoArray = []; 
        todoArray.push(todo);
    }else{
        todoArray.push(todo);
    }
    console.log(todoArray)
}



function addTodo(event){
    event.preventDefault();
    var li = document.createElement('li');
    var title = document.createTextNode(todoInput.value)
    li.className = "list-group-item d-flex justify-content-between"
    var a = document.createElement('a')
    a.href = "#";
    a.className = "delete-item";
    a.onclick= "removeItem(this)";
    var i = document.createElement('i')
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    listofTodos.appendChild(li)
    addtodoArray(todoInput.value)
}


addTodoBtn.addEventListener('click', addTodo)


///REMOVE ITEM
function removeItem(event){
    console.log(event.parentElement)
  event.parentElement.remove()
}


a.addEventListener('click', removeItem)


