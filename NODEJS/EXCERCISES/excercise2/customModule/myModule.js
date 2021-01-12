module.exports = class User{
        constructor(username,pass){
            this.username = username;
            this.pass = pass
        }
        printUser(){
            console.log(`USERNAME: ${this.username}\nPASSWORD: ${this.pass}`);
        }
    }

