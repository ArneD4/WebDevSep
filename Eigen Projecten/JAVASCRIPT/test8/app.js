/// LOGIN VALLIDATION ///

let usernameValue = document.getElementById('username');
let passwordValue = document.getElementById('password');

function getUser(username,password){
    let user_bool = (username=='admin')? true:false;
    let pass_bool = (password=='123456')? true:false;
    console.log('username result>', user_bool)
    console.log('password result>', pass_bool)

    let user ={
        isUserAdmin:user_bool,
        isPasswordValid:pass_bool
    }

    return user;
}

function loginHandler(){
    console.log(usernameValue.value)
    console.log(passwordValue.value)
    let result = getUser(usernameValue.value,passwordValue.value)

    if(result.isUserAdmin == false || result.isPasswordValid == false) {
        alert('Username or password incorrect!')
    }else {
        alert('welcome admin! username and password are correct!')
    }
}
