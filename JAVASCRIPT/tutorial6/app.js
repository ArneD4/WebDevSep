let student = {
    scores: [50, 60, 70, 80, 90, 100], //Array
    firstname: "Jack", //String
    lastname: "Sparrow",//String
    isPassed: true,//Booelan
    age:25,//Number
    showstudent:function(){ 
        console.log('this is show student function')
    },//Function
    books:{
        category:"Philosphy",
        title:"Nietzsche"
    }
}

console.log(student.scores)
let _print = 'Fullname: ' + student.firstname + " " + student.lastname; //Classic Way
console.log(print)



Fullname: ${student.firstname} ${student.lastname} //Modern way
Is Student passed the exman: ${student.isPassed}
Age: ${student.age}
Favorite Autho: ${student.books.title}


console.log(print)