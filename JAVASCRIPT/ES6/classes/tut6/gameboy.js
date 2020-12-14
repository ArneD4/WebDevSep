class Gameboy{
/*
volume up
volume down
power on
power off
left-right-backward-forward
*/
    constructor(colour,weight,height,model){
        this.colour=colour
        this.weight=weight
        this.height=height
        this.model=model
    }
    device(){
        console.log(`${this.model}${this.colour}${this.weight}${this.height}`)
    }
    volumeup(){

    }
    volumedown(){

    }
    poweron(){

    }
    powerof(){

    }
    tunrLeft(){

    } 
    turnRight(){

    }
    backward(){

    }
    forward(){

    }
}


let nintendo = new Gameboy('red','100gr','1.5Inch','v1')

nintendo.device()