const {Router} = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {UserModel} = require("../models/User.model")

const notesController = Router();




module.exports = {
    notesController
}