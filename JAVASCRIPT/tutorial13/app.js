// capital_letters = toUpperCase();
// lower_letters = toLowerCase();

var str1 = capital_letters.innerHTML;
var str2 = lower_letters.innerHTML;

// var str1 = 'make this uppercase';
// var str2 = 'MAKE THIS LOWERCASE'


function onMouseOver1(){
    capital_letters.innerHTML = str1.toUpperCase();   
}

function onMouseOver2(){
        lower_letters.innerHTML = str2.toLowerCase();   
}



/////////

let title = document.getElementById('title');

function mouseOver(){
    console.log(title.innerText.toUpperCase())
}
function mouseOut(){
    console.log(title.innerText.toLowerCase())
}

title.addEventListener('mouseover', mouseOver);
title.addEventListener('mouseout', mouseOut)


