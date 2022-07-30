const UserModel = require("../models/User.js")
const bcrypt = require('bcrypt');
class UserController {

    static signup = async (req, res) => {

        res.render("front/signup", { message: req.flash("error") })

    }

    static insertuser = async (req, res) => {

        const { name, email, password, cnpassword } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {
            // Using connect-flash package
            // Here error is a kind of runtime var i.e. storing message
            req.flash('error', 'email already exists')
            return res.redirect("/signup")

        }
        else {
            if (name && email && password && cnpassword) {
                if (password == cnpassword) {
                    try {
                        const salt = await bcrypt.genSalt(10);
                        const hashPassword = await bcrypt.hash(password, salt)
                        const result = await UserModel({
                            name: name,
                            email: email,
                            password: hashPassword
                        })
                        // JWT Generate Token
                        const token=await result.generateAuthToken()

                        // console.log(token)
                        res.cookie('jwt',token)
                        await result.save()
                        return res.redirect("/login")
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
                else {
                    req.flash('error', 'Password and confirm password doesnt match')
                    return res.redirect("/signup")
                }
            }
            else {
                req.flash('error', 'All fields are required')
                return res.redirect("/signup")
            }
        }

    }



    static verifyLogin = async (req, res) => {
        try {
            const { email, password } = req.body
            // console.log(email,password)
            if (email && password) {
                const user = await UserModel.findOne({ email: email })
                if (user != null) {
                    // The first password is coming from line 57
                    const isMatched = await bcrypt.compare(password, user.password)
                    if ((user.email === email) && isMatched) {
                        const token=await user.generateAuthToken()
                        // console.log(token)
                        res.cookie('jwt',token)
                        res.redirect("/admin/dashboard")
                    }
                    else {
                        req.flash('error', 'Email or password is not valid')
                        return res.redirect("/login")
                    }
                }
                else {
                    req.flash('error', 'You are not a registered user')
                    return res.redirect("/login")
                }
            }
            else {
                req.flash('error', 'All fields are required')
                return res.redirect("/login")
            }
        } catch (err) {
            console.log(err)
        }
    }

    // For logging out the user
    static logout=async(req,res)=>{
        try{
            res.clearCookie('jwt')
            res.redirect('/login')
        }
        catch(err){
            console.log(err)
        }
    }






}

module.exports = UserController