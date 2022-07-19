const mongoose =require('mongoose');

//define Schema
const AboutSchema =new mongoose.Schema({
    description:{type:String, required:true, trim:true},
},{timestamps:true})

//console.log(studentSchema.path('age'))


// Creating Collection
const AboutModel = mongoose.model('about',AboutSchema);


module.exports =AboutModel ; 