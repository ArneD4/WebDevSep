const fs = require('fs')
const youtubedl = require('youtube-dl') //use exact package name

const video = youtubedl('http://www.youtube.com/watch?v=SpeNcnSknRo',
// Optional arguments passed to youtube-dl.
['--format=18'],
// Additional options can be given for calling `child_process.execFile()`.
{ cwd: __dirname })

video.on('info',function(info){
    console.log(info)
})