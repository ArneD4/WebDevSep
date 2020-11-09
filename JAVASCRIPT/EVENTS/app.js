function whenPageLoadEvent(){
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    console.log('test',loadTime)
    return document.body.style.backgroundColor="black";
}

function clickHandler(){
    console.log('onClick event')
}



function whenMouseOverItem(){
    console.log('mouse over event')
}


function onMouseOutEvent(){
    console.log('mouse out event')
}


function mouseHandler(){
    console.log('on mouse up')
}

function mouseDownHandler(){
    console.log('on mouse down')
}
function isUseCopiedSomething(){
    console.log('user tried to copy')
}

function doubleClickHandler(){
    console.log('twice clicked')
}

function keyDownHandler(){
    console.log('user pressed key')
}

function onChangeHandler(){
    let option = document.getElementById('courses').value;
    let result = document.getElementById('result');
    result.innerHTML=`${option}`
}
