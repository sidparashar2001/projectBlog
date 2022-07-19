const mongoose=require("mongoose")

// Line 4 for Cloud DB
const database="mongodb+srv://sidaesth:infosys12@cluster0.zutbl.mongodb.net/blogweb?retryWrites=true&w=majority"


const connectDB=()=>{
    // For local DB
    // return mongoose.connect("mongodb://localhost:27017/BlogWebsite")


    // For cloud DB
    return mongoose.connect(database)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDB