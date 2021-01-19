const http = require('http');

let users = [
    {
        id:1,
        username:'jack'
    },
    {
        id:2,
        username:'George'
    }
]

function adminPage(obj){
    return `<p>${obj.username}</p>`
}


http.createServer((request,response)=>{
    console.log(request.url)
    //response.write('homepage')
    if(request.url === '/admin'){
        //response.write('This is admin')
        users.forEach(user=>response.write(adminPage(user)))
    }else if(request.url === '/login'){
        response.write('This is login')
    }else if(request.url === '/api'){
        console.log('this is rest-api url')
    }

    // response.write('hello')
    response.end()
}).listen(3001,()=>{
    console.log('server is running')
})