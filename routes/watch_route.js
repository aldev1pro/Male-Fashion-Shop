
const express = require("express")
const router = express.Router()
const watch = require("../model/watch")



router.get("/wizi/male/fashion/watch", async (req,res)=>{
    
    try{
    const allWatchs = await watch.findAll()

    res.status(200).json({watchs:allWatchs})

}catch(error){
    res.status(400).json({message:"something went wrong"})
}

})

module.exports = router