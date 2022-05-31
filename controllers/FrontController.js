class FrontController{

    static index=async(req,res)=>{
        res.render("front/index")
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