const express=require("express")
const BlogController = require("../controllers/admin/BlogController")
const CategoryController = require("../controllers/admin/CategoryController")

const AdminController = require("../controllers/AdminController")
const FrontController = require("../controllers/FrontController")
const router=express.Router()

// Create Router for Front Controller
router.get("/",FrontController.index)
router.get("/about",FrontController.about)
router.get("/contact",FrontController.contact)
router.get("/blog",FrontController.bloglist)
router.get("/login",FrontController.login)


// Create Router fro Admin Controller
router.get("/admin/dashboard",AdminController.dashboard)
// Admin Category Controller
router.get("/admin/category",CategoryController.allCategory)
router.post("/admin/category_insert",CategoryController.category_insert)

// Create Router for Blog Controller
// router.get("/admin/blog",BlogController.blog)
router.get("/admin/createBlog",BlogController.createBlog)
router.post("/admin/blog_insert",BlogController.blog_insert)
router.get("/admin/blog_display",BlogController.blog_display)
router.get("/admin/blog_edit/:id",BlogController.blog_edit)
router.post("/admin/blog_update/:id",BlogController.blog_update)
router.get("/admin/blog_delete/:id",BlogController.blog_delete)






module.exports=router

