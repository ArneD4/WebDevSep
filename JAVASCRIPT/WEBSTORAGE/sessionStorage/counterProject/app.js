// let result = document.querySelector('h3')
// let plusBtn = document.querySelector('.btn-primary')
// let minBtn = document.querySelector('.btn-danger')
// let resetBtn = document.querySelector('.btn-warning')
// nmbr = 0;


// console.log(nmbr.innerText)
// console.log(plusBtn)
// console.log(minBtn)
// console.log(resetBtn)


// plusBtn.addEventListener('click',function(){
//     nmbr++;
//     sessionStorage.setItem(nmbr,'plus') 
//     result.innerText=nmbr
// })

// minBtn.addEventListener('click',function(){
//     nmbr--;
//     sessionStorage.setItem(nmbr,'min') 
//     result.innerText=nmbr
// })

// resetBtn.addEventListener('click',function(){
//     result.innerHTML='x'
//     sessionStorage.setItem('x','reset')
//     nmbr=0;
    
// })

// console.log(sessionStorage)



//other way//
let buttons = document.querySelectorAll('button');
let output = document.querySelector('.output')
console.log(buttons)
console.log(output)

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(button.className === 'btn btn-primary'){
            incMethod()
        }
        if(button.className === 'btn btn-danger'){
            decMethod()
        }
        if(button.className === 'btn btn-warning'){
            resetMethod()
        }
    })

})


function incMethod(){
    console.log('increaseMethod')
    sessionStorage.counter=Number(sessionStorage.counter)+1;
    output.innerHTML=`You clicked ${sessionStorage.counter} times`
    sessionStorage.setItem(sessionStorage.counter,'hi')
}
function decMethod(){
    console.log('decreaseMethod')
    sessionStorage.counter=Number(sessionStorage.counter)-1;
 //   sessionStorage.setItem('counter', dec)

    output.innerHTML=`You clicked ${sessionStorage.counter} times`
}
function resetMethod(){
    console.log('resetMethod')
    sessionStorage.clear();
    output.innerHTML = 'x'
    return sessionStorage.setItem('counter', 0);
    
}