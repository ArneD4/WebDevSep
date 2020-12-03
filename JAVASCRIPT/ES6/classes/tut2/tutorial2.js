//user model

function User(name,age,job,email,username,password){
    this.name=name;
    this.age=age;
    this.job=job;
    this.email=email;
    this.user=username;
    this.pass=password;
    this.users=[]
}

//get user information
User.prototype.getUser = function(){
    console.log(`NAME:${this.name}\nAGE:${this.age}\nJOB:${this.job}\nEMAIL:${this.email}\nUSER:${this.user}\nPASS:${this.pass}`)
    console.log(this.users)
}

User.prototype.addUser = function(){
    let user = {
        name:this.name,
        age:this.age,
        job:this.job,
        email:this.email,
        user:this.user,
        pass:this.pass
    }
    this.users.push(user)
    //console.log(user)
    //console.log(this.users)
}


let user1 = new User('Lili',25,"Dancer","lili@microsoft.com","lili","1234");
let user2 = new User('Mike',25,"Programmer","Mike@microsoft.com","mike","1234");

user1.addUser();
user2.addUser();
user1.getUser();
user2.getUser();
