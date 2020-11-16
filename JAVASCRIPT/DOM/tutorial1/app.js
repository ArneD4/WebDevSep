// window object

//1///
console.log('//1//')
var windowOjb = window;
windowObj = this;

var windows = {
    alert: function(string){
        console.log(string)
    }
}

windows.alert('testing')
console.log(' ')



////
console.log('//2//')
var windowObj = window;

console.log(window.outerHeight,'the height of the window')
console.log(window.outerWidth, 'the width of the window')


console.log(' ')
console.log('//3//')
// window.addEventListener('resize', funciton(){
//     console.log(window.outerHeight)
// console.log(window.outerWidth)
// });

var parent = document;
parent = document.all;
parent = document.all.length;
parent = document.all;[document.all.length -1];
parent = document.body;
parent = document.head;
parent= document.location;
parent= document.scripts;
parent = document.links;
parent = document.links[0].getAttribute('href');
parent = document.links[0].classList;
parent = document.links[0].className;
console.log(parent) // try all above 


//forms
console.log(' ')
console.log('//4//')
parent = document.forms;
parent = document.forms.length;
//parent = document.forms[0].id
//parent = document.forms[0].method;

console.log(parent, '==> amount of form elements in the document')



console.log(' ')
console.log('//5//')
// slect elements with methods

/*
getElementById
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
*/

//getElementById method

var htmlElement;

htmlElement = document.getElementById('intectbrussel')


// //by className

htmlElement = document.getElementsByClassName('btn')
htmlElement = document.getElementsByClassName('form-control')

//by tagName

htmlElement = document.getElementsByTagName('a')
htmlElement = document.getElementsByTagName('input')
//querySelector and querySelectorAll

htmlELement = document.querySelector('a.btn.btn-primary');
htmlELement = document.querySelector('input');
console.log(htmlElement)

//htmlELement = document.querySelector('#intecbrussel')


// querySelector and querySelectorAll
console.log(' ')
console.log('//6//')
htmlElement = document.querySelector('a.btn.btn-primary')
htmlElement = document.querySelector('input')
//htmlElement = document.querySelector('#intecbrussel');

// querySelectorAll

htmlElement = document.querySelectorAll('input');
htmlElement = document.querySelectorAll('a.btn.btn-primary')
htmlElement = document.querySelectorAll('#intecbrussel')
htmlElement = document.querySelectorAll('input')

// htmlElement = htmlElement[1].value

htmlElement.forEach(function(element){
    console.log('element and value of ALL input fields: ', element.value)
    
})
console.log(' ')
console.log('//7//')
htmlElement = document.querySelectorAll('a.btn.btn-primary');

htmlElement.forEach(function(button){ // forEach 
    console.log('this is a button (we changed the text in the button to CLICK(see below))==>', button)
    button.innerHTML="CLICK"
    button.addEventListener('click',function(){ // dom event
        console.log(' ')
        console.log('this is just a test!!!!')
    })
})

console.log(' ')
console.log('type of element =>', typeof htmlElement)
console.log('the selected elements', htmlElement)
