var express = require('express');
var router = express.Router();

const {getUsers,addUsers} = require('./controllers/userController')


/* GET users listing. */
router.get('/', getUsers);

// post routers
router.post('/',addUsers)


module.exports = router;