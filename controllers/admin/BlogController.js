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
                description:req.body.description

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
}


module.exports=BlogController