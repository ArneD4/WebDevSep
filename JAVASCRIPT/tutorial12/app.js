//register form


let userval = document.getElementById('username');
let passval = document.getElementById('password');

let user = {

    printUserInfo: function(){
        console.log(this.username)
        console.log(this.password)
    }
}




function printHandler(){
    console.log(user)// before user set pass
    user.username = userval.value
    user.password = passval.value
    console.log(user) // after user set pass
    return user.printUserInfo();
}