//async await Async functions

///ex1
let data = 1; 

async function getData(){
    let retrieved = await data;
    console.log(retrieved)
}

getData()


///ex2

let user = {
    id:1,
    name:"root",
    pwd:123456
}
let user1 = {
    id:2,
    name:"root1",
    pwd:123644
}

async function getUser(obj){
    let response = await obj
    console.log(response)
}
getUser(user)


//same with promises
async function getUser_converted(obj){
    return new Promise((resolve,reject)=>{
        resolve(obj)
        console.log(obj)
    })
}

console.log(getUser_converted(user1))


//ex3
let data2 = [
    {
        id:1,
        name:"Priya"
    }
]

async function getStudents(){   
    return await data2.forEach(student=>console.log(student))
}

async function addStudent(obj){
    let temp = await data2;
    temp.push(obj)
    data2 = temp;
    return obj
}

addStudent(
    {
    id:2,
    name:"Susan"
}).then(response=>console.log("Response",response))
.then(getStudents)

addStudent(
    {
        id:3,
        name:"Mikail"
    }).then(response=>console.log("Response",response))
.then(getStudents)