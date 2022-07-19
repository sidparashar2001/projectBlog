const mongoose =require('mongoose');

//define Schema
const CategorySchema =new mongoose.Schema({
    category_name:{type:String, required:true, trim:true,unique:true},
},{timestamps:true})

//console.log(studentSchema.path('age'))


// Creating Collection
const CategoryModel = mongoose.model('category',CategorySchema);


module.exports =CategoryModel ; 