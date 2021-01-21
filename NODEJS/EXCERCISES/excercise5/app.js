const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
const path = require('path')
app.use(bodyParser({
    extended:false
}))

const {HomepageController} = require('./controller/HomepageController')
const {getData} = require('./controller/dataControler')
const { get } = require('http')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',HomepageController)
app.get('/blogs',getData)



app.listen(3020,()=>{
    console.log('The server is running...')
})