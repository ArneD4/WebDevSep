class UFO{

    constructor(name,type,model){
        this.name=name;
        this.type=type
        this.model=model;
    }

    droneInfo(){
        console.log(`
        Drone Name:${this.name}
        Drone Type:${this.type}
        Drone Model:${this.model}
        Drone Color:${this.color}
        `
        )
    }
}


class CivilDrone extends UFO{
    constructor(name,type,model,color){
        super(name,type,model)
        this.color=color
        
    }

    civilInfo(){
        this.droneInfo()
        console.log("Civil Drone")
    }
}

class MilitaryDrone extends UFO{
    constructor(name,type,model,color){
        super(name,type,model)
        this.color = color
    }
    
    militaryInfo(){
        this.droneInfo()
        console.log("Military Drone")
    }

}

let drone = new CivilDrone("Tello","Civil Drone","v.1","Black")
drone.droneInfo()

let drone1= new MilitaryDrone("IHA","Military Drone","v.1","Grey")
drone1.droneInfo()