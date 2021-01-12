const fs = require('fs')


let myarg = process.argv[2]
let message = process.argv[3]

console.log(typeof process.argv)
console.log('FileName!!!',fileName)
console.log(message)

fs.writeFile(fileName,message,(res)=>{

})
