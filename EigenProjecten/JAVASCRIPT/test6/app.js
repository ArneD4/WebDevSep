/////KEEPER//////

function keeper1(param) {
    return Number(param);
}

function keeper2(param) {
    return Number(param)+3;
}

function keeper3(param) {
    return Number(param)+10;
}

function keeper4(param) {
    return `The result is ${param}`
}


// keepr1(1) > keeper2(keeper1(1)) > keeper3(keepr2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1)))); ==> data flow //

let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)

//

let student = {}

function str1(param) {
    return param;
}

function str2(param) {
    param.firstname='Jack'
    return param;
}

function str3(param) {
    param.lastname="Sparrow"
    return param;
}

function str4(param) {
    console.log(param)
}

str4(str3(str2(str1(student))))

