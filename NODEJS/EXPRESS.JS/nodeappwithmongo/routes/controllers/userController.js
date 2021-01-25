const User = require('../../models/Users')
const bcrypt = require('bcrypt')

/* GET users listing. */

const getUsers = (req, res)=> {
    Users.find({},(err,response)=>{
    if(err){
      res.json(err)
    }else{
         res.json({
        title:"all users",
        users:response
      })
     }
    })
  };
  const addUsers = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(protected_password => {
            const newUser = new User({
                username: req.body.username,
                password: protected_password
            })
            newUser.save()
                .then(response => {
                    res.json({
                        message: 'OK',
                        data: response
                    })
                }).catch(err => {
                    res.json(err)
                })
        })
}

  module.exports = {getUsers, addUsers}