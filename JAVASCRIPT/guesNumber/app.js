var guess= document.getElementById("estimate");


var correctNumber = "4"


console.log('correct:', correctNumber)

function getGuess(){
    console.log('guess:',Number(guess.value))
}

function isGuessCorrect(){
    if(Number(guess.value)==correctNumber){
        console.log('correct')
    }

    else if(Number(guess.value)>correctNumber){
        console.log('go lower')
    }
      
    else {
        console.log('go higher')
    }
}


document.getElementById("button").addEventListener("click", isGuessCorrect );