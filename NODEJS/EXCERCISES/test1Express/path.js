const path = require('path');

const fileLocation = path.join(__dirname, '.app.js'); //location in dir

const fileName = path.basename(fileLocation); // name of app

const fileExt = path.extname(fileName); //extention of app

console.log(fileExt);