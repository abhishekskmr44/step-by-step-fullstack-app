const {Router} = require("express");

const bcrypt = require("bcrypt")

const {UserModel} = require("../models/User.model")


const userController = Router();

userController.post("/signup",(req,res)=>{
   const {email,password,age} = req.body;
   bcrypt.hash(password, 6, async function(err, hash) {
    // Store hash in your password DB.
    if(err){
        res.send("Something went wrong, plz try again later")
    }
    const user = new UserModel.create({
        email,
        password:hash,
        age

    })
    await user.save()
    res.send("Signup successfull")
    
   });
})


userController.post("/login",(req,res)=>{
    res.send("login")
})

module.exports = {
    userController
}