/*

while
do while
for
for/in
for/of

*/

// let students = [
//     {name:"Michael",age:20},
//     {name:"George",age:19},
//     20,
//     {name:"Test"}
// ]

// console.log('amount of elements in array',students.length)



// let i=0
// while(i<students.length){ //condition
//     // code
//     console.log(i)
//     console.log(students[i].name)
//     i++;
// }

// /////

// while(i<100){
//     i++;
//     if(i%2==0){
//         console.log(i)
//     }
// }

////

// var answer;
// var result=0;

// while(answer%2!=0){
//     answer = prompt('Enter a number!')
//     result += parseInt(answer)
// }

// console.log("result:",parseInt(result))



////do wile loop

/*do{
    //code block
}// while (condition)
*/
//// count untill loop has reached while statement
// var i=0;

// do{
//     console.log(i)
//     i++;
// }while(i<=10);

// ///

// var randomNumber;

// do{
//     randomNumber= Math.floor(Math.random()*100)+1
//     console.log(randomNumber)
// }while(randomNumber>=50)


/////

// var number;
// var sum=0;

// do{
//         number = Number(prompt('Enter a number!'))
//         sum+=number;
//         console.log("Sum Result=>",sum)
//         console.log(number)
//         console.log(number!=0)
// }while(number!=0)

//////




////

// var password = "123456"
// var rateLimit=3;

// while(rateLimit>0){
//     var askUserPassword = prompt('Enter your password')
//     if(askUserPassword == password){
//             console.log('welcome user')
//             break;
//     }else{
//         console.log(`you have ${rateLimit} attempts left`)
//     rateLimit--;
//     console.log(rateLimit)
//     console.log(askUserPassword)
// }
// }

////////

// for loop

// let i=0
// let count=0;
// for(i;i<=10;i++){
//     count++
//    console.log(count,'Count:',i)
   
// }

// for(let i=1;i<=50;i++){
//     var oddNumber = i%2;
//     if(oddNumber!=0){
//         count++
//     console.log(count,'Second Count:',i)

//     }
// }

// for(let i=1;i<=100;i++){
//     let res = i*i;
//     count++
//     console.log(count,'Third Count:',res)
// }


///

// let x,y
// for(x=1,y=50; x<=10 && y>=50;x++){
//     console.log(x,":",y)
//     y++
   
// }

/////



//nested for loop



// var x,y;

// for(x=8;x<=10;x++){

//     for(y=1;y<=10;y++){

//         var result = `${x} * ${y} = ${x*y}`
//         console.log(result)

//     }

// }

///////////
//Exercise devisible by 3 and 5
//////



var sum = 0;


for(var i = 0;i<100;i++){

    if(i%3 ===0 && i%5 ===0){
        console.log(i)
        sum+= i
        console.log('sum is ',sum)
    }

}


//////


let NumbersinArray = []
console.log("Before",null)
for(let index = 0; index < 10; index++) {

    NumbersinArray.push(index)

}
console.log("After",NumbersinArray)



// for in loop


let student = {
    name:"Michael",
    age:23,
    profession:"Developer"
}

for(objName in student){

console.log('(these are the property names=>)',objName) //prints property names of an object (objName)

}

for(name in student){
    console.log(`AttributeName: ${name}
    AttributeValue: ${student[name]}`)
}

///for of loop
/// for/of lets you loop over data structures that are iterable such as Arrays, Stirngs, Maps, NodeLists and more...

let webDevClass = ['Pryia','Mikail','Adnan','Emmanuel','Susan','Lotte','Joty','Elnura','Yannick','Kobe','Oguz','Arne']


for(let [index,student] of webDevClass.entries()){

    console.log(`${student}:${index}`)
}



let companyName= "INTECBRUSSEL"

for(let letter of companyName){
    console.log(letter)
}

////



