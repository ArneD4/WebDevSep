/*
PROJECT PLAN
google-scraper  ['https://www.npmjs.com/package/google-it']
http ['http']
fs ['fs']
yargs - commandline args parser ['https://www.npmjs.com/package/yargs']
*/

const googleIt = require('google-it')
const http = require('http')
const fs = require('fs')

let argv = require('yargs/yargs')(process.argv.slice(2))
.usage(`
──▄█▀█▄─────────██
▄████████▄───▄▀█▄▄▄▄
██▀▼▼▼▼▼─▄▀──█▄▄
█████▄▲▲▲─▄▄▄▀───▀▄
██████▀▀▀▀─▀────────▀▀
$0 --dork "intitle:Index of mp3" --output [filename.json] --live 1 --port [num]`) // optional 
.demandOption(['dork']) // required
.argv


console.log(argv.dork) // undefined as default
console.log(argv.output) // filename.json

googleIt({'query':argv.dork}).then(results=>{
    console.log(results)
    if(argv.output !=undefined){
        fs.writeFileSync(argv.output,JSON.stringify(results));
    }

    if(argv.live !=undefined){
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
                <h1>Hello, world!</h1>
            <div>${result.map(result=>{
                result.link+"<br>"
            })}</div>
                <!-- Optional JavaScript -->
                <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
              </body>
            </html>`)
            res.end();
        }).listen(Number(argv.port),()=>{
            console.log(`Visit Link for Result: http://localhost:${argv.port}/`)
        })
    }

})