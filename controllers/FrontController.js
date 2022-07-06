const BlogModel=require("../models/Blog.js")
const CategoryModel=require("../models/category.js")

class FrontController{

    static index=async(req,res)=>{
        try{
            const result=await BlogModel.find()
            // console.log(result)
            res.render("front/index",{data:result})
        }catch(err){console.log(err)}
    }

    static about=async(req,res)=>{
        res.render("front/about")
    }

    static contact=async(req,res)=>{
        res.render("front/contact")
    }

    static bloglist=async(req,res)=>{
        res.render("front/blog")
    }

    static login=async(req,res)=>{
        res.render("front/login",{ message: req.flash("error") })
    }

    
    static detail=async(req,res)=>{
        // console.log(req.params.id)
        try{
            const result1=await CategoryModel.find()
            const result2=await BlogModel.findById(req.params.id)
            const result3=await BlogModel.find()
            res.render("front/detail",{cat:result1,data:result2,info:result3})
            // console.log(result1) 

        }catch(err){
            console.log(err)
        }
    }

    static detailbycat=async(req,res)=>{
        try{
            // console.log(req.params.catname)
            const catname=req.params.catname //Food
            // console.log(catname)
            // Find takes object as a parameter  
            const result=await BlogModel.find({category_name:catname})
            // console.log(result)
            res.render("front/index",{data:result})
        }
    
        catch(err){
            console.log(err)
        }
    }

}

module.exports=FrontController