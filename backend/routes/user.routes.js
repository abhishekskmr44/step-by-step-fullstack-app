const {Router} = require("express");

const bcrypt = require("bcrypt")

const {UserModel} = require("../models/User.model")


const userController = Router();

userController.post("/signup",(req,res)=>{
   const {email,password,age} = req.body;
   bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
 
   res.send("Signup")
})

userController.post("/login",(req,res)=>{
    res.send("login")
})

module.exports = {
    userController
}