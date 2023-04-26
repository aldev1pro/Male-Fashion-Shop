

const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const trouser = require("../model/trouser")



router.get("/wizi/male/fashion/trouser", async (req,res)=>{
    
    try{
    const allTrouser = await trouser.findAll()

    res.status(200).json({trousers:allTrouser})

}catch(error){
    res.status(400).json({message:"something went wrong"})
}

})

module.exports = router