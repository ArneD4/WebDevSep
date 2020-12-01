/////PROMPT ==> pop-up/////////

//1//

// let askuser = prompt('Are you admin', 'no');
// let username = prompt('What is your username?' , 'default');
// let askAge = confirm('How old are you? , 17')
// console.log(askAge);
// console.log(aksuser);
// console.log(username);

///if statement///


//2//

let user = 'admin'


if(user == 'admin'){
    console.log('Welcome Admin')
}else{
    console.log('welcome to user dashboard')
}


//3//

// let username = prompt('enter your username','default');

// if(username == 'admin'){
//     alert('welcome admin!')
// }else{alert('welcome user!')}


//4//

var totalProduct=0;

if(totalProduct <=0){
    totalProduct++;
    console.log("Total product ==>", totalProduct)
}


//5//

let count = 0;

function increment(){
        count++
        console.log(count)
}

function decrement(){
    if( count<=0){
        console.log(count)
    }else{
        count--;
        console.log(count)
    }
}
