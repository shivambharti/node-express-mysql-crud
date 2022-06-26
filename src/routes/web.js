const express=require("express");
const router=express.Router();
const apicontroller=require('../controllers/apicontroller')

router.get('/',apicontroller.index);

router.get('/data',apicontroller.data)

router.get('/users',apicontroller.getUsers);

router.post('/createUser',apicontroller.createUser)

module.exports=router;