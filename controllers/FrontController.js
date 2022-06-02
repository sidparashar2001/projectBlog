const BlogModel=require("../models/Blog.js")

class FrontController{

    static index=async(req,res)=>{
        try{
            const result=await BlogModel.find()
            console.log(result)
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
        res.render("front/login")
    }

    



}

module.exports=FrontController