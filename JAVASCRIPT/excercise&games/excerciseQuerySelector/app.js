var nthChild = document.querySelectorAll('.list-group-item:nth-child(odd)');

///

nthChild.forEach(function(todo){
    todo.className = "list-group-item d-flex justify-content-between bg-success"
})

///


var todoInput = document.querySelector('#todo');
var listofTodos = document.querySelector('.list-group');
var addTodoBtn = document.querySelector('button.btn btn-danger')


function addTodo(event){
    event.preventDefault();
    var li = document.createElement('li');
    var title = document.createElement(todoInput.value)
    li.className = "list-group-item d-flex justify-content-between"
    var a = document.createElement('a')
    a.href = "#"
    a.className = "delete-item"
    var i = document.createElement('i')
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    listofTodos.appendChild(li)
}

addTodoBtn.addEventListener('click', addTodo)
