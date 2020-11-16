
var username = document.getElementById("username");
var password = document.getElementById("password");


function getUser(){
    var user_bool = (username.value=='admin')? true:false;
    var pass_bool = (password.value=='123456')? true:false;
    console.log('username result>',user_bool)
    console.log('password result>',pass_bool)

    var user={
        isUserAdmin:user_bool,
        isPasswordValid:pass_bool
    }
    console.log(user)

    if(user.isUserAdmin==false || user.isPasswordValid == false ){
        alert('user or pass is incorrect')
    }else{
        alert("user and pass are correct")
    }
    return user;
}

// function loginHandler(){
//     console.log(username.value)
//     console.log(password.value)
//     let result = getUser(username.value, password.value)
// }

// console.log(getUser)
// console.log(user_bool);
// console.log(pass_bool);



// var result = getUser('admin','123456');
// var result = getUser();

// if(result.isUserAdmin == false || result.isPasswordValid == false){
//     console.log('Username or password invalid')
// }else{
//     console.log('Welcome admin! Username and password are correct!')
// }


// console.log(result)






// // let user_bool = document.getElementById('user');
// // let pass_bool = document.getElementById('pass');

// // console.log(user_bool)
// // console.log(pass_bool)


// // function getUser(username,password){
// //     let user_bool = (username=='admin')? true:false;
// //     let pass_bool = (password=='123456')
// //     console.log('username result>',user_bool)
// //     console.log('password result>',pass_bool)

// //     let user={
// //         isUserAdmin:user_bool,
// //         isPasswordValid:pass_bool
// //     }
// //     return user;
// // }

// // // let result = getUser('admin','123456');
// // let result = getUser('user','pass');

// // if(result.isUserAdmin == false || result.isPasswordValid == false){
// //     console.log('Username or password invalid')
// // }else{
// //     console.log('Welcome admin! Username and password are correct!')
// // }


// // console.log(result)