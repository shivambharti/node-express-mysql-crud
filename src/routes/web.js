const express=require("express");
const router=express.Router();
const apicontroller=require('../controllers/apicontroller')

router.get('/',apicontroller.index);

router.get('/data',apicontroller.data)

module.exports=router;