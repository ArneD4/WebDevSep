    class User{
        constructor(username,pass){
            this.username = username;
            this.pass = pass
        }
        print(){
            console.log(`${this.username}\n${this.pass}`)
        }
    }

    module.exports = {User}