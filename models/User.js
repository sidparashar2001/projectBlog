const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');


//define Schema
const UserSchema =new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true,unique:true},
    password:{type:String, required:true, trim:true},
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
   
},{timestamps:true})

// define token instance method
UserSchema.methods.generateAuthToken=async function(){
    // this._id will give the id of the latest registered user   
    // console.log(this._id)
    
    try{

        const pntoken = jwt.sign({ _id: this._id.toString() }, 'siddharthparashar');
        // console.log(pntoken)
        this.tokens=this.tokens.concat({token:pntoken})
        await this.save()
        return pntoken

    }catch(err){
        console.log(err)
    }
}


// Creating Collection
const UserModel = mongoose.model('user',UserSchema);


module.exports = UserModel ;  