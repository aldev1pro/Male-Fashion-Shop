
const express = require("express")
const router = express.Router()
const shirt = require("../model/shirt")


router.get("/wizi/male/fashion/shirt", async (req,res)=>{
    
    try{
    const allShirts = await shirt.findAll()

    res.status(200).json({shirts:allShirts})

}catch(error){
    res.status(400).json({message:"something went wrong"})
}

})

module.exports = router