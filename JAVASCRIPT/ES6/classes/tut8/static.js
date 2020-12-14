// class Student{

//     constructro(name){
//         this.name = name;
//         this.users = [];
//         this.count=0
//     }

//     printName(){
//         console.log('Non-static method')
//     }

//     static showName() {
//         console.log('static method')
//     }

//     static s_Increase(){
//         return this.count
//     }
// }


class Students {
    constructor(name){
        this.name = name;
        this.count=0
    }

    static addStudent(name){
        //factory patern
        //this._name = name;
        let temp ={
            name: name
        }
        return temp
    }
    showStudent(){
        console.log(Students.addStudent(this.name))
    }
}

let student = new Students("Emmanuel")
student.showStudent();