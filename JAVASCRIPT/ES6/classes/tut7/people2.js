class People{
    constructor(){
    this.data=[]
    }

    show(){
        return this.data
    }
    
addLocalStorage(){
    localStorage.setItem('users',JSON.stringify(this.data))
}

    addUser(username,password,role="guest"){
        let user={
            username:username,
            password:password,
            role:role
        }
        this.data.push(user)
        console.log('this user has been added')
    }

  
}

let user1= new People('root','toor','moderator')
user1.addUser('Root','12345','admin')
user1.addLocalStorage()
console.log(user1.show())