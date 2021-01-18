/* install express.js
nmp i express*/

const express = require('express')
const app = express();
const { homepageController, apiController } =require('./controller/index')

app.get('/')

app.get('/api')

app.listen(3000,()=>{
    console.log('server is running...')
})

