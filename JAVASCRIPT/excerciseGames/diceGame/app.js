
var dice1 = "X"
var dice2 = "X"


   
    


function getWinner(){


    var dice1 = Math.floor(Math.random() * 6) + 1;
    return1.innerText=`${dice1}`

    var dice2 = Math.floor(Math.random() * 6) + 1;
    return2.innerText=`${dice2}`

    if(Number(dice1)<Number(dice2)){
        console.log('player 2 wins')
        result.innerText = 'player 2 wins'
       
       
        
    }else if(Number(dice1)>Number(dice2)){
        console.log('player 1 wins')
        result.innerText = 'player 1 wins'
        
    }else{
        console.log('equal')
        result.innerText = 'equal'
    }

}

