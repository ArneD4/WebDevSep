const fs = require('fs')
const readline = require('readline');

// READ FILE
fs.readFile('./readme.txt','utf8',(err,content)=>{
    console.log(content)
})

// APPEND FILE
fs.appendFile('./readme.txt',' This is a new line',(err)=>{
    if(err) throw err;
    console.log('data save')
})

// WRITE FILE
fs.writeFile('./readme.Txt','NEW DATA',(err)=>{
    if(err) throw(err)
    console.log('File created')
})

// unlink method - delete
// fs.unlink('./readme.txt',()=>{
//     console.log('Deleted!')
// })

// RENAME FILE
fs.rename('./reamde.txt','./helloworld.txt',()=>{
    console.log('filename has been renamed.')
})

const readInterface = readline.createInterface({
    input:fs.createReadStream('./combolist.txt')
});

readInterface.on('line',(line)=>{
    let extracted = line.split(":")[0]
    console.log(extracted)
    fs.appendFile('./extractedData.txt',`${extracted}\n`,(err)=>{
        if(err) return console.log(err)
        console.log('Users List Extracted!')
    })
})

fs.SumModule(x,y,(res)=>{
    res = x+y

})

