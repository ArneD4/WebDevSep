let users = [
    {
        id:1,
        name:'Jane',
        username:'Janey',
        email:'jane@mail.com'
    },
    {
        id:2,
        name:'Lisa',
        username:'LiLi',
        email:'Lisa@mail.com'
    },
    {
        id:3,
        name:'Tweed',
        username:'Tweedy',
        email:'Tweed@mail.com'
    },
    {
        id:4,
        name:'Bork',
        username:'Krob',
        email:'bork@mail.com'
    }
];


let ShowUsers = ()=>{
    setTimeout(()=>{
        users.forEach((n)=>{
            console.log(n.name)
        })
    },2000)
}

let AddUser = (id,name,username,email)=>{
    return new Promise((resolve,reject)=>{
        if(typeof id == null){
            reject('Input incorrect')
        }else{
            resolve(`New User:\nid:${id}\nname:${name}\nusername:${username}\nemail:${email}`)
            users.push({id:id,name:name,username:username,email:email})
            console.log(users)
        }
    })
}


AddUser(8,'Arne','D4','arne@mail.com')
.then(res=>
    console.log(res))

    


ShowUsers()

