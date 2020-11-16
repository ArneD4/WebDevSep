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

first.innerHTML = "This student's name is " + student.firstname +" "+student.lastname + ", his socres are " + student.scores + " he also has books about " + student.books.category + " by " + student.books.title




console.log(student.scores)
let _print = 'Fullname: ' + student.firstname + " " + student.lastname; 
console.log(print)
//Classic Way

second.innerHTML = `
Fullname: ${student.firstname} ${student.lastname}
Is Student passed the exman: ${student.isPassed}
Age: ${student.age}
Favorite Author: ${student.books.title}`
 //Modern way
console.log(print)