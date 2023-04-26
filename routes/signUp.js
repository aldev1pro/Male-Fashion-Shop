
const express = require("express")
const router = express.Router()
const emailVerifier = require("deep-email-validator")
const bcrypt = require("bcrypt")
const user = require("../model/user")



router.post("/wizi/male/fashion/signUp", async (req,res)=>{

    const {firstName,lastName,email,password} = req.body

    try{

    //if none of the fields are null
    if(!firstName || !lastName|| !email || !password){
       return res.status(404).json({error:"None of the fields should be empty"})
     }

     //verifying the validity of email address
     //before flooding the database with non-working emails
    const {valid,reason,validators} = await isEmailValid(email)

    if(!valid){
       return res.status(404).json({message:"Please provide a valid email address.",
        reason:validators[reason].reason
    })}

    const hashPassword = await bcrypt.hash(password,10)

    //adding user to the database
    result = await user.create({
        firstName,
        lastName,
        email,
        hashPassword
    })
    return res.status(200).json("Account successfully created")

}catch(error){
   return res.status(404).json({message:"something went wrong"})
}

    

})

//custom function for verifying emails
async function isEmailValid(email){
    return emailVerifier.validate(email)
}

module.exports = router