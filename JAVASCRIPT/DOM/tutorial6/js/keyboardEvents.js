/*
keypress
keydown
keyup
*/


let todoInput = document.querySelector('#todo');
let AppTitle = document.querySelector('.card-header')

//keypress chars and numbers only

todoInput.addEventListener('keypress',function(e){
    console.log('test')
    console.log(e.which) //asci
    console.log(e.key)
    AppTitle.innerHTML=+e.key

})

//keydown event chars, numbers and other
todoInput.addEventListener('keydown',function(e){
    console.log(e.key)
    
})



//keyup event
todoInput.addEventListener('keyup',function(e){
    console.log("keyup",e.key)


})
