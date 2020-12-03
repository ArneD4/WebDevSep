// function constructor

function Member() {
    this.members = [];
}

Member.prototype.addMember = function(username,password,email){
    let tempObj = {
        user:username,
        pass:password,
        email:email
    }
    this.members.push(tempObj)
    console.log(tempObj)
}

let subscribe1 = new Member()
//let subscribe2 = new Member()
//console.log(subscribe1)
subscribe1.addMember('Root','123123','root@root.com');
//subscribe2.addMember('ical','1123','rootswise@root.com');