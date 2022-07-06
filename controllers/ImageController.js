

const { findById } = require("../models/image.js");
const ImageModel=require("../models/image.js")

class ImageController{

static createImage=async(req,res)=>{
 res.render("image/createImage")
}

static imageInsert=async(req,res)=>{
    // console.log(req.file.filename);
    try{
        const result=new ImageModel({
            title:req.body.title,
            image:req.file.filename
        })
        await result.save()
        res.redirect("/image_display")
    }
    catch(err){
        console.log(err)
    }
   }


static imageDisplay=async (req,res)=>{

    try{
        const result =await ImageModel.find()
        
        res.render("image/displayImage",{data:result})
    }catch(err){
        console.log(err)
    }

}

static imageEdit=async(req,res)=>{
    try{
        const result=await ImageModel.findById(req.params.id)
        res.render("image/editImage",{data:result})
    }
    catch(err){
        console.log(err)
    }
}



static imageUpdate=async(req,res)=>{
    try{
        if(req.file){
            var imagefile=req.file.filename
        }
        const result=await ImageModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
            image:imagefile
        })
        await result.save()
        res.redirect("/image_display")
        // console.log(req.body)
        // console.log(req.file)
    }
    catch(err){
        console.log(err)
    }
}



static imageDelete=async(req,res)=>{
    try{
        const result=await ImageModel.findByIdAndDelete(req.params.id)

        res.redirect("/image_display")
    }
    catch(err){
        console.log(err)
    }
}

}



module.exports=ImageController

