const express =require("express")
const connectDB = require("./db/connect_db.js")
const app=express()
var session = require('express-session')
var flash = require('connect-flash');

// For local
// const port=3000

// For local and server both
const port = process.env.PORT || 3000;

const web=require("./routes/web.js")
var bodyParser=require("body-parser")

connectDB()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  
  app.use(flash());
  


// Router Load
app.use("/",web)

// Set up ejs
app.set("view engine","ejs")

// For static file
app.use(express.static("public"))




app.listen(port,()=>{
    console.log(`Server Started on localhost:${port}`)
})