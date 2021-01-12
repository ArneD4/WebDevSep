const myModule = require('./myModules/intecbrussel')
const getAllUsers = require('./myModules/getUsers')
const getSingle = require('./myModules/getSingleUser')
console.log('test')
//console.log(myModule)

myModule('Mikail','Emmanuel','Lotte','Suzan')
//console.log(getAllUsers().then(res=>console.log(res)))
getSingle(5).then(res=>console.log(res))