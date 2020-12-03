// Object Constructors


// const student1 = {
//     name:"Jack",
//     job:"Developer",
//     getStudent:function(){
//         console.log(`Name ${this.name}\nJob${this.job}`)
//     }
// }

// const student2 = {
//     name:"Michael",
//     job:"Superman",
//     getStudent:function(){
//         console.log(`Name ${this.name}\nJob${this.job}`)
//     }
// }


//function constructor
function  People(fullName,jobDetail){
    this.name = fullName;
    this.job = jobDetail
}

let student1 = new People('Mike','Programmer')
console.log(student1)