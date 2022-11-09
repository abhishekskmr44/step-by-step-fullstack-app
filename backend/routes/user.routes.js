const {Router} = require("express");

const {UserModel} = require("../models/User.model")


const userController = Router();

userController.post("/signup",(req,res)=>{
   const {email,password,age} = req.body;
    res.send("Signup")
})

userController.post("/login",(req,res)=>{
    res.send("login")
})

module.exports = {
    userController
}