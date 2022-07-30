class AdminController{
    static dashboard=(req,res)=>{
        // console.log(req.user.name)
        const {name,email}=req.user

        res.render("admin/dashboard",{n:name,e:email})
    }
}

module.exports=AdminController