let inputKey = document.querySelector('#inputKey')
let inputValue = document.querySelector('#inputValue')
let insertBtn = document.querySelector('#buttonInsert')
let showBtn = document.querySelector('#getDataFromStorage')
let result = document.querySelector('#result')


//set item
insertBtn.addEventListener('click', function(){
    console.log(inputKey.value)
    console.log(inputValue.value)
    sessionStorage.setItem(inputKey.value,inputValue.value)
    console.log(sessionStorage)
})

//get item
showBtn.addEventListener('click', function(e){ 
    sessionData=[]
    for (i=0;i<sessionStorage.length;i++){ //i=1 om default data niet te tonen
        console.log('index',i)
        let key = sessionStorage.key(i)
        console.log('key:',key)
        let value = sessionStorage.getItem(key)
        console.log('value:',value)
        console.log(`Key: ${key} Value: ${value}`)
        temp={
            key:key,
            value:value
        }
        sessionData.push(temp)
        result.innerHTML += `KEY: ${key} </br> VALUE: ${value}</br></br>`
        
    }
    console.log(sessionData)
    e.preventDefault() 
})



