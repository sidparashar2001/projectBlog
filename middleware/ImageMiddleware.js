const multer=require("multer")
const path=require("path")

// To send the image to upload folder using Multer
const Storage=multer.diskStorage({
    destination:'./public/upload',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})

var upload=multer({
    storage:Storage
}).single('image')
// image is the name that we had written in the create image form input tag

module.exports=upload