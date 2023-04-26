

const express = require("express")
const router = express.Router()
const shoe = require("../model/shoe")



router.get("/wizi/male/fashion/shoe", async (req,res)=>{
    
    try{
    const allShoes = await shoe.findAll()

    res.status(200).json({shoes:allShoes})

}catch(error){
    res.status(400).json({message:"something went wrong"})
}

})

module.exports = router