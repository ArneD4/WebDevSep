module.exports = function(username,pass){
    //console.log("username: ",username,"Password: ",pass)
    class User{
        constructor(username,pass){
            this.username = username;
            this.pass = pass
        }

    }
    let result = new User(username,pass)
    console.log(result)
}