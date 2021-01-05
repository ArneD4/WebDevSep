// fetch api

const single = document.querySelector('#singleUser')
const output = document.querySelector('#output')
const button = document.querySelector('#button')
const apiUrl = 'http://localhost:3000/users'
let response = fetch(apiUrl);
let result = document.querySelector('#result')
const clear = document.querySelector('#clear')
const getAll = document.querySelector('#allusers')

// response.then(res=>console.log(res))
// response.then(res=>res.json()).then(data=>console.log(data))


//same with different syntax
// async function getUsers(){
//     let response = await fetch(apiUrl)
//     let data = await response.json()
//     console.log(data)
//     return data
// }
//create HTML-element function
const x = t => document.createElement(t)

result.innerHTML =""

async function singleUser(idx){

    let response = await fetch (`${apiUrl}/${idx}`)

    let data = await response.json();
    
    // let card = x('div');
    // card.classnmae = 'card p-2'

    // let cardBody = x('div');
    // cardBody.classname = 'card-body';

    // let name = x('h5');
    // name.classname = 'card-title'
    // name.innerHTML = data.name

    // let id = x('p');
    // id.innerHTML = "id:" + "\n" + data.id

    // let username = x('p');
    // username.innerHTML = "username:" + "\n" + data.username

    // let email = x('p');
    // email.innerHTML = "email:" + "\n" + data.email

    // let address = x('p');
    // address.innerHTML = "address:" + "\n" + data.address.city;

    // let linebreak = x('hr')

    // card.appendChild(cardBody);
    // cardBody.appendChild(name);
    // cardBody.appendChild(id);
    // cardBody.appendChild(username);
    // cardBody.appendChild(email);
    // cardBody.appendChild(address);
    // card.appendChild(linebreak)
    
    // return result.appendChild(card)

    return result.innerHTML = `
    <div class="card"">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text">Username: ${data.username}</p>
    <p class="card-text">Email: ${data.email}</p>
    <p class="card-text">Address: ${data.address.city}</p>

  </div>
</div>
    `
}

button.addEventListener('click',(e)=>{
    e.preventDefault();
    singleUser(single.value).then(response=>{
        output.value=response;
    })
})

clear.addEventListener('click',(e)=>{
    e.preventDefault();
    result.innerHTML = ""
})

getAll.addEventListener('click',async function getUsers(){
    let response = await fetch(apiUrl)
    let data = await response.json()
    console.log(data)
    const html = data.map( user =>{
        return `<div class="card" >
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">ID: ${user.id}</p>
          <p class="card-text">Username: ${user.username}</p>
          <p class="card-text">Email: ${user.email}</p>
        </div>
      </div>`
    }).join("")
    result.insertAdjacentHTML("afterbegin",html)
})


