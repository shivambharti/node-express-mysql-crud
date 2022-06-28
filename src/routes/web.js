const express=require("express");
const router=express.Router();
const apicontroller=require('../controllers/apicontroller')

router.get('/',apicontroller.index);

router.get('/data',apicontroller.data)

router.get('/users',apicontroller.getUsers);

router.post('/createUser',apicontroller.createUser)

router.put ('/updateUser',apicontroller.updateUser)

router.delete ('/deleteUser',apicontroller.deleteUser)



module.exports=router;