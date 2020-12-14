class People{
    constructor(username,password,role="guest"){
    this.username=username;
    this.password=password;
    this.role=role
    this.data=[]
    }

    show(){
        return this.data
    }
    
addLocalStorage(){
    localStorage.setItem('users',JSON.stringify(this.data))
}

    addUser(){
        let user={
            username:this.username,
            password:this.password,
            role:this.role
        }
        this.data.push(user)
        console.log('this user has been added')
    }

    test(){
        console.log(this.role)
    }
}

let user1= new People('root','toor','moderator')
let user2= new People('Bob','Weed','Cool')
let user3= new People('Kelly','miauw','Poes')
user1.addUser();//user added here
user2.addUser();//user added here
user3.addUser();//user added here
console.log(user1.show())//user data shows here
user1.addLocalStorage()
console.log(user2.show())