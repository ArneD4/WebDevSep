// Promise example : McDo order

const McDonalds = (mainfood,drink,extra)=>{
    return new Promise((resolve,reject)=>{
        if(typeof mainfood != 'string'){
            reject('string only please!')
        }else{
            resolve(`Order:\n${mainfood}, ${drink}, ${extra}\nTicket Number: ${Math.floor(Math.random()*1000)+1}`)
        }
    })
}

McDonalds('BigMac','Coca Cola','Chickenwing')
.then(res=>{
    console.log(res)
})

McDonalds('Vegetarian Burger','Water','Spring Rolls')
.then(response=>{
    console.log(response)
})


McDonalds(23232332,'cola','fries')
.then(response=>{
    console.log(response)
})
.catch(err=>{
    console.log(err)
})