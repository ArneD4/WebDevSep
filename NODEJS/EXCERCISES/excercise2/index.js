const newUser = require('./customModule/myModule')

let user1 = new newUser('Arne','01234');
let user2 = new newUser('Tom','56789');


user1.printUser()
user2.printUser()
