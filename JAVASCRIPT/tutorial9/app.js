function keeper1(param){
    return Number(param);
}

function keeper2(param){
    return Number(param) + 3;
}

function keeper3(param){
    return Number(param)+10;
}

function keeper4(param){
    return `This is the last process ${param++}`
}


let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)

////data flow


let student = {}

function str1(param){
    param.age="25";
    return param;
}

function str2(param){
    param.firstname='Jack';
    return param;
}

function str3(param){
    param.lastname="Sparrow";
    return param;
}

function str4(param){
    console.log(param)
}

str4(str3(str2(str1(student))));

//////


// 3 function

// function1 init object
// function2 add properties (fullname,age,email)
// function3 printerService print info in this function.

// function3 collapse function2 collapse function
// function3>function2>function1 > result

let info ={}

function stri1(param){
    return param;
}
function stri2(param){
    param.fullname='TomSawyer';
    param.age= '26';
    param.email= 'sawyersloth@gmail.com';
    return param;
}

function stri3(param){
       console.log(param);
}

let end = stri3(stri2(stri1(info)));
console.log(end)