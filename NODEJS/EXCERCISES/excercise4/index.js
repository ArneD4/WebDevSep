const express = require('express')
const app = express();
const {homePage,loginPage,registerPage} = require('./controller/index')
const bodyParser = require('body-parser')

app.use(bodyParser({
    extended:true
}))


function showUser(req,res,next){
    let id = req.body.id;
    let name = req.body.name;
    console.log(`id: ${id}`)
    console.log(`name: ${name}`)
    next()
}

app.all('/',homePage);
app.all('/login',showUser,loginPage)
app.all('/register',registerPage)

app.listen(3000, ()=>{
    console.log('Server is running ...')
})