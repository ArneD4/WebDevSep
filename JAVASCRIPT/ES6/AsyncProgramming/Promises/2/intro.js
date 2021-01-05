// Callbacks hell in ES5


// ///1

// function PrinterService(string,callback){
//     let timeout = Math.floor(Math.random()*1000)
//     setTimeout(function(){
//         console.log(string)
//         console.log("ms: ",timeout); 100
//         callback()
//     },timeout)
// }

// PrinterService('First task',function(){
//     PrinterService('Second task',function(){
//         PrinterService('Third task',function(){
//             console.log('done')
//         })
//     })
// })




// ///2
//ES5

// getUser(function(err,user){
//     // getuser JSON
//     getProfile(user,function(err,profile){
//         getAccount(profile,function(err,acc){
//             getReport(acc,function(err,report){
//                 DownloadService(download,function(e){
//                     //programming
//                 })
//             })
//         })
//     })
// })








// // Promises Chain - ES6
// getUser()
// .then(getProfile)
// .then(getAccount)
// .then(getReport)
// .then(DownloadService)
// .cath(function (e) {console.error (e) })

// ////


// //Async/Await - ES7

// async function SendAsync(){
//     let response = await "Hello World"
//     console.log(response)
// }

// SendAsync()







//////

// let comments = [
//    {
//     id:1,
//     user:"Elnura",  
//     comment:"Hello World" 
//    }
// ]

// let addComment = (callback)=>{
//     setTimeout(()=>{
//         comments.push({
//             id:2,
//             user:"Priya",
//             comment:"Hello Friend!"
//         })
//         callback()
//     },3000)
// }

// let getComments = ()=>{
//     setTimeout(()=>{
//         comments.forEach(comment=>{
//             console.log(`ID:${comment.id}\nUser:${comment.user}\nComment:${comment.comment}`)
//         })
//     },2000)
// }

// addComment(getComments);








// ///// new Promise()

// let printService = (string)=>{
//     return new Promise((resolve,reject)=>{
//         console.log(string)
//         resolve()
//     })
// }

// printService('intecbrussel')
// .then(()=>printService('intecbrussel-1'))
// .then(()=>printService('intecbrussel-2'))
// .catch(err=>err)








//////


// let students = ['Lotte','Arne','Adnan','Mikail','Joty','Priya','Susan','Emmanul','Ogzu','Elnura','Kobe','Yannick']

// let PromiseMe = new Promise((resolve,reject)=>{
//     if(students !=null){
//         resolve(students.sort())
//     }else{
//         reject('Error!')
//     }
// })

// PromiseMe.then(res=>res).then(data=>{
//     data.forEach(student=>{
//         console.log(student)
//     })
// })








/////




let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('First promise is done')
    },1000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Second promise is done')
    },500)
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Third promise is done')
    },200)
})
//Promise.all
// Promise.all([promise1,promise2,promise3])
// .then(allAnswers=>{
//     console.log(allAnswers)
// }).catch(err=>{
//     console.log(err)
// })
///same as above 
const myArr = [promise1,promise2,promise3]
Promise.all(myArr)
.then(allAnswers=>{
    console.log(allAnswers)
})