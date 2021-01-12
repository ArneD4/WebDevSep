// fetch

const intecbrussel = require('node-fetch') // import jodejs package 
// const variable = require('packagename')


intecbrussel('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>res.json())
.then(data=>console.log(data))

