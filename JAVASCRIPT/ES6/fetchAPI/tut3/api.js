const api = "https://jsonplaceholder.typicode.com/users"
console.log(api)

fetch(api)
.then(data=>data.json())
.then(res=>console.log(res))