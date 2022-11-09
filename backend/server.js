const express = require("express")

const {userController} = require("./routes/user.routes")

const {connection} = require("./config/db.js")

const app = express();

const PORT  = 8881

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user",userController)

// app.use("/notes", notesController)

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
   console.log(`listening on PORT ${PORT}`)
})