

const express = require("express")
const router = express.Router()
const cap = require("../model/cap")


router.get("/wizi/male/fashion/cap", async (req,res)=>{
    
    try{
    const allCaps = await cap.findAll()

    res.status(200).json({caps:allCaps})

}catch(error){
    res.status(400).json({message:"something went wrong"})
}

})

module.exports = router