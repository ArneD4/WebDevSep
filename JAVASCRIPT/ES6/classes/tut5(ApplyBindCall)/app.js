// Bind
console.log("Bind")



const info = {
    firstname:"Jack",
    lastname:"Georges"
}

const age = {
    age:25
}

const together = {
    ...info,
    ...age
}

function PrintService(){
    console.log(`${this.firstname} ${this.lastname}\n AGE:${this.age}`)
}

const cloneofFunction = PrintService.bind(together);

console.log(cloneofFunction)//shows function inner
console.log(cloneofFunction())//shows function output => ()


//Apply
console.log("Apply")



const newCalc = {
    myFunc:function(a,b){
        return a+b
    }
}



const response = newCalc.myFunc.apply("",[6,7])
console.log(response)




//excercise
console.log("excercise")



const StudenManagement = {
    addUser:function(name,age,city,email){
        let response = `${this.name}\n${this.age}\n${this.city}\n${this.email}`
        console.log(response)
    }
}

let st1 = {
    name:"Jack",
    age:25,
    city:"Brussels",
    email:"email@mail.e"
}


let AddUserResponse = StudenManagement.addUser.apply(st1)
console.log(AddUserResponse)




// call
console.log("call")


function canonPrinter(){
    console.log(this.name,this.age)
}

let data = {
    name: "name pro",
    age: 25
}

let printerTest = canonPrinter.call({    name:"ali",
    age:25}

)

//console.log('printer service',printerTest)