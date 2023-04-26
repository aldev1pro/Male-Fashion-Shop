
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const user = require("../model/user")

router.post("/wizi/male/fashion/signIn", async (req,res)=>{

    try{

        const {email,password} = req.body

        //checking the nullability of the request body
        if(!email || !password){
            return res.status(404).json({error:"None of the fields should be empty"})
         }

         //another validation step
         //chose email because email is unique to each user
         const findUser = await user.findOne({where:{email:email}})

         //using bcrypt to hash password & compare it with the stored database password
         const verifyPassword = await bcrypt.compare(password,findUser.hashPassword)

         if(!verifyPassword){
            return res.status(404).json({error:"password incorrect"})
         }
         
         //sending jwt-token 
         const payload = {email,password}
         const generateToken = jwt.sign(payload, process.env.ACCESS_TOKEN)
         
         return res.status(200).json({token:generateToken})

    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
    
})


module.exports = router