const express = require("express")

const app = express();

const PORT  = 8881

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(PORT,()=>{
   console.log(`listening on PORT ${PORT}`)
})