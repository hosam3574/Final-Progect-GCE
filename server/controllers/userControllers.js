//import user modle
const User =require('../models/user');

//creatuser

const createUser = async(req, res )=>{
    console.log("fkldsjgks")

const userName = req.body.username;
const email = req.body.email;
const password = req.body.password;
console.log(req.body)

try{

//encrypt the password

const salt = await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
    console.log(userName,email,hashedPassword)
    const user=  new User ({
      
        username : userName,
         email : email,
         password  : hashedPassword ,
    })
    await user.save();
    console.log(user)
    res.status(201).json({ message: 'User Connected new', user:user });

}

catch(error){
res.status(500).json({ message:error })

}
 
}
module.exports={createUser};