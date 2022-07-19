const ContactModel=require("../../models/Contact.js")

class ContactController{

    static contact=async(req,res)=>{
        res.render("admin/contact/createContact")
    }
    static contact_display=async(req,res)=>{
        try{
            const result= await ContactModel.find()
            res.render("admin/contact/contact",{data:result})
        }
        catch(err){
            console.log(err)
        }
    }
    
    static contact_insert=async(req,res)=>{
        
        
        
        
        try{
            const result = new ContactModel({
                name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message
            })

            await result.save()
            res.redirect("/admin/contact_display")            
        }
        catch(err){
            console.log(err)
        }
    }

    static contact_edit=async(req,res)=>{
        try{
            const result=await ContactModel.findById(req.params.id)
            res.render("admin/contact/edit",{data:result})
        }catch(err){
            console.log(err)
        }
    }


    static contact_update=async(req,res)=>{
        try{
            const result=await ContactModel.findByIdAndUpdate(req.params.id,req.body)

            await result.save()
            res.redirect("/admin/contact_display")     
        }catch(err){
            console.log(err)
        }
    }

    static contact_delete=async(req,res)=>{
        try{
            const result=await ContactModel.findByIdAndDelete(req.params.id)
        
            res.redirect("/admin/contact_display")     
        }catch(err){
            console.log(err)
        }
    }

    


}
module.exports=ContactController;