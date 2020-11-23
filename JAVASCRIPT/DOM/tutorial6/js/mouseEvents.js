//
let todoForm = document.querySelector('#todo-form')

//
/*
click
mouseup
mouseover
mouseout
mouseenter
mouseleave

*/

//Click
todoForm.addEventListener('click',function(e){
    console.log('click event')
})

//DoubleClick Event
todoForm.addEventListener('dblclick',function(e){
    console.log('Double Click')
})

//MouseDown event
todoForm.addEventListener('mousedown',function(e){
    console.log('MouseDown Event')
})

//MouseUp event
todoForm.addEventListener('mouseup',function(e){
    console.log('MouseUp event')
})


//MouseOut Event
todoForm.addEventListener('mouseout',function(e){
    console.log('mouse out')
})

//Mouse Enter event ==> only once per element
todoForm.addEventListener('mouseenter',function(e){
    console.log('mouse enter event')
})

//Mouse Leave event ==>
todoForm.addEventListener('mouseleave',function(e){
    console.log('mouse leave event')
})
