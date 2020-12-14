// ECMASCRIPT v5

function studentInfo(name,course){
    this.name = name;
    this.course = course
}

studentInfo.prototype.showInfo=function(){
    console.log(`Student's name is ${this.name} and he is studying ${this.course}`)
}

let student1 = new studentInfo('Priya','Javascript')
student1.showInfo()


// ECMASCRIPT v6

class Student {
    //constructor function
    constructor(name,course){
        this.name=name
        this.course = course
    } 
    //function in class
    getInfo(){
        console.log(`Student's name is ${this.name} and he is studying ${this.course}`)
    }
}

let student2 = new Student('Adnan','Javascript')
student2.getInfo();
    