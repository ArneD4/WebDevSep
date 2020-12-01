
//1//
let numbers=[1,2,3,4,5,6]
const [x,y,z,a,b,c] = numbers;

console.log(a,b,c)
console.log(z)
////

//2//
let students = ['Student1','Student2','Student3'];
let [s1,s2,s3] = students;
console.log(typeof s1)
console.log(s1)

//destructing with nested arrays

let nestedArray = ['Book1','Book2','Book3',['Book4','Book5','Book6']]
console.log(nestedArray)
let [b1,b2,b3,[b4,b5,b6]] = nestedArray;
console.log(b1)
console.log(b4)

// obj

// let StudentInfo = {
//     name:"Mr. Mud",
//     profession:'Developer',
//     location: {
//         city:'Aalst',
//         country:'Belgium'
//     }
// }

// console.log(StudentInfo)

// let {name,
//     profession,
//     location:{city,country}
// } = StudentInfo;

// console.log(country)
// console.log(name,profession)


//


const people = {
    name:"Jack",
    job:"Student",
    age:25,
    showPeople: function(){
        console.log('hello ->showPeopel function')
    }
}

//const {name,job,age,showPeople} = people
const {name:naam,job,age:leeftijd,showPeople:toonPersonen} = people
//console.log(name,job,age)

toonPersonen();
//showPeople();

///////

const obj1 = {
    a:10,
    b:20,
    c:40,
    d:50,
};

const {a:letter1,b:letter2,c:letter3,d:letter4} = obj1;

console.log(letter1)

/////////////

const  metaInfo = {
    title:'INTECBRUSSEL',
    courses:{
        javascript:10,
        java:20,
        csharp:10
    },
    contacts:{
        Bart:"bart@intecbrussel.be",
        Atilla:"atilla@intecbrussel.be"
    },
    loc:['Rouppeplein','Brussel']
}

// const {title,courses:{javascript,java,csharp},contacts:{Bart,Atilla},loc:[ab,bc]} = metaInfo
//console.log(titel)
const[straat,stad] = metaInfo.loc
console.log(straat)



///
