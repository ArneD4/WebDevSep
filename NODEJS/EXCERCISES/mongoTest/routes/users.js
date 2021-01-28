var express = require('express');
var router = express.Router();
const checkToken = require('../middlewares/checkToken')
const{getUsers,addUser,deleteUserById,updateUserById,getUserById,authController,loginController} = require('../controllers/userController')

/* GET users listing. */
router.get('/', getUsers );

//post router
router.post('/',addUser)

router.get('/:id',checkToken, getUserById)

// update user
router.put('/:id',checkToken,updateUserById)

// delete user
router.delete('/:id',checkToken,deleteUserById)

// login auth
router.get('/auth/login',authController)

router.post('/auth/login',loginController)

module.exports = router;
