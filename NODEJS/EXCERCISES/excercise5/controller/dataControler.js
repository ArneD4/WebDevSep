const fetch = require('node-fetch')


const getData = (req,res)=>{
     fetch(api)
     .then(re=>re.json())
     .then(i => res.send(i))
console.log('hi')
res.render('blogs')
}

module.exports = {getData}