const express=require("express")

const AboutController = require("../controllers/admin/AboutController")
const BlogController = require("../controllers/admin/BlogController")
const CategoryController = require("../controllers/admin/CategoryController")
const ContactController = require("../controllers/admin/ContactController")

const AdminController = require("../controllers/AdminController")
const FrontController = require("../controllers/FrontController")
const ImageController = require("../controllers/ImageController")
const UserController = require("../controllers/UserController")
// const UnderConstructor = require("../middleware/UnderConstructor")
const upload = require("../middleware/ImageMiddleware")
const router=express.Router()

// Create Router for Front Controller
router.get("/",FrontController.index)
router.get("/about",FrontController.about)
router.get("/contact",FrontController.contact)
router.get("/blog",FrontController.bloglist)
router.get("/login",FrontController.login)
router.get("/detail/:id",FrontController.detail)
router.get("/detailbycat/:catname",FrontController.detailbycat)


// Create Router for Admin Controller
router.get("/admin/dashboard",AdminController.dashboard)
// Admin Category Controller
router.get("/admin/category",CategoryController.allCategory)
router.post("/admin/category_insert",CategoryController.category_insert)

// Create Router for Blog Controller
// router.get("/admin/blog",BlogController.blog)
router.get("/admin/createBlog",BlogController.createBlog)
router.post("/admin/blog_insert",upload,BlogController.blog_insert)
router.get("/admin/blog_display",BlogController.blog_display)
router.get("/admin/blog_edit/:id",BlogController.blog_edit)
router.post("/admin/blog_update/:id",upload,BlogController.blog_update)
router.get("/admin/blog_delete/:id",BlogController.blog_delete)


// ContactController

router.get("/admin/contact",ContactController.contact)
router.post("/admin/contact_insert",ContactController.contact_insert)
router.get("/admin/contact_display",ContactController.contact_display)
router.get("/admin/contact_edit/:id",ContactController.contact_edit)
router.post("/admin/contact_update/:id",ContactController.contact_update)
router.get("/admin/contact_delete/:id",ContactController.contact_delete)


// About Controller

router.get("/admin/about",AboutController.about)
router.post("/admin/about_update/:id",AboutController.about_update)

// Image Controllers
router.get("/create_image",ImageController.createImage)
router.post("/image_insert",upload,ImageController.imageInsert)
router.get("/image_display",ImageController.imageDisplay)
router.get("/image_edit/:id",ImageController.imageEdit)
router.post("/image_update/:id",upload,ImageController.imageUpdate)
router.get("/image_delete/:id",ImageController.imageDelete)


// User Controllers

router.get("/signup",UserController.signup)
router.post("/insertuser",UserController.insertuser)
router.post("/verify_login",UserController.verifyLogin)




module.exports=router
