const mongoose =require('mongoose');

//define Schema
const ContactSchema =new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    phone:{type:Number, required:true, trim:true},
    message:{type:String, required:true, trim:true}
},{timestamps:true})

//console.log(studentSchema.path('age'))


// Creating Collection
const ContactModel = mongoose.model('contact',ContactSchema);


module.exports =ContactModel ; 