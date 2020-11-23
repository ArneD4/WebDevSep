let todoInput = document.querySelector('#todo');

todoInput.addEventListener('focus',function(e){
    console.log(e.type)
    console.log('focus event')
    console.log(e.target)
    e.target.style.backgroundColor="yellow"
})


//Blur event
todoInput.addEventListener('blur',function(e){
    console.log(e.type)
    console.log('blur event')
    e.target.style.backgroundColor="white"
})


//Paste event
todoInput.addEventListener('paste', function(e){
    console.log('paste event')
    console.log(e)
})

//Copy event
todoInput.addEventListener('copy',function(e){
    console.log('copy event')
    console.log(e)
})

//Cut event
todoInput.addEventListener('cut',function(e){
    console.log('cut event')
})

//Select event
todoInput.addEventListener('select',function(e){
    console.log('select event')
})
