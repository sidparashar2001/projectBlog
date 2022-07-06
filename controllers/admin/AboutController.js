const AboutModel=require("../../models/About.js")
class AboutController{
    static about=async(req,res)=>{
        const result =await AboutModel.findOne()
        res.render("admin/about/about",{data:result})
        
        
    }
    static about_update=async(req,res)=>{
        try{
           const result =await AboutModel.findByIdAndUpdate(req.params.id,req.body)
           await result.save()
           res.redirect("/admin/about")
        }
        catch(err){
            console.log(err)
        }
    }
}
module.exports=AboutController;