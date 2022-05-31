const express =require("express")
const connectDB = require("./db/connect_db.js")
const app=express()
const port=3000
const web=require("./routes/web.js")
var bodyParser=require("body-parser")

connectDB()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


// Router Load
app.use("/",web)

// Set up ejs
app.set("view engine","ejs")

// For static file
app.use(express.static("public"))




app.listen(port,()=>{
    console.log(`Server Started on localhost:${port}`)
})