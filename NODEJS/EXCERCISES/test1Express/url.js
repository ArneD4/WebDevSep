const url = require('url');

const adress = 'http://localhost:8080/default'

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
