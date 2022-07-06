const BlogModel = require("../../models/Blog.js")
const CategoryModel=require("../../models/category.js")

class BlogController{
    // static blog=(req,res)=>{
    //     res.render("admin/blog/blog")
    // }

    static createBlog=async(req,res)=>{
        try{
            // console.log(result)
            const result=await CategoryModel.find()
            res.render("admin/blog/createblog",{cat:result})
        }
        catch(err){
            console.log(err)
        }
    }

    static blog_insert=async(req,res)=>{
        // console.log(req.body)
        try{
            const result=new BlogModel({
                category_name:req.body.category_name,
                title:req.body.title,
                description:req.body.description,
                image:req.file.filename
            })
            await result.save()
            res.redirect("/admin/blog_display")
            
        }
        catch(err){
            console.log(err)
        }
    }


    static blog_display=async(req,res)=>{
        try{
            const result=await BlogModel.find();
            // console.log(result)
            res.render("admin/blog/blog",{data:result})
        }
        catch(err){
            console.log(err)
        }
    }




    static blog_edit=async(req,res)=>{
        try{
            const result1 = await CategoryModel.find()
            const result2 = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render("admin/blog/edit",{data1:result1,data2:result2})

        }catch(err){
            console.log(err)
        }
    }

    static blog_update=async(req,res)=>{
        if(req.file){
            var imagefile=req.file.filename
        }
        try{

            // console.log(req.body)
            const result=await BlogModel.findByIdAndUpdate(req.params.id,{
                category_name:req.body.category_name,
                title:req.body.title,
                description:req.body.description,
                image:imagefile
            })
            // console.log(result)

            await result.save()
            res.redirect("/admin/blog_display")

        }catch(err){
            console.log(err)
        }
    }

    static blog_delete=async(req,res)=>{
        try{

            const result=await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect("/admin/blog_display")

        }catch(err){
            console.log(err)
        }
    }
}


module.exports=BlogController