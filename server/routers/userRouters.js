const exprees = require('express');
const {createUser}=require('../controllers/userControllers');

const router =exprees.Router();

//creat user rooute 

router.post('./create',createUser);


//export the router
module.exports=router;