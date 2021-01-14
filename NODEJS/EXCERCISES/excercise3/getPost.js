/*mission
https://jsonplaceholder.typicode.com/posts/

# packages you need
yargs
http
fs

node getPost.js --id 10

http://jsonplaceholrder.typicode.com/posts/10

console.log(singlePost)
res.write()

1- make command-line app interface with yargs module
2- make async function to get single Post
3- save response data in local folder
4- Print the response data in browser with http module

id is required
 */
var http = require('http')
var fs = require('fs')
const posts = require('node-fetch')
const yargs = require('yargs')(process.argv.slice(2))
.usage(`
───▄▀▀▀▀▀───▄█▀▀▀█▄
──▐▄▄▄▄▄▄▄▄██▌▀▄▀▐██
──▐▒▒▒▒▒▒▒▒███▌▀▐███
───▌▒▓▒▒▒▒▓▒██▌▀▐██
───▌▓▐▀▀▀▀▌▓─▀▀▀▀▀

$0 --id "post id" --output [filename.json] --live 1 --port [num]`)
.demandOption(['id']) // required
.argv

console.log(yargs)
console.log(yargs.id)

function getData(){
    return new Promise(resolve=>{    
    posts(`https://jsonplaceholder.typicode.com/posts/${yargs.id}/`)
    .then(res=>res.json())
    .then(data=>resolve(data))
    
})

  
}

 async function singlePost(){
    const result = await getData();
    console.log(result)
    if(yargs.output !=undefined){
        fs.writeFileSync(yargs.output,JSON.stringify(result));
    }
    if(yargs.live !=undefined){
        http.createServer((req,res)=>{
            res.write(`<!doctype html>
            <html lang="en">
              <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            
                <title>Hello, world!</title>
              </head>
              <body>
              <div class="row p-5 m-5">
                <h1>${result.title}\n</h1>
            <div>${result.body}</div>
                <!-- Optional JavaScript -->
                <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </div>
              </body>
            </html>`)
            res.end();
        }).listen(Number(yargs.port),()=>{
            console.log(`Visit Link for Result: http://localhost:${yargs.port}/`)
        })
    }    
 }

singlePost();