
const express = require("express")
const router = express.Router()
const order = require("../model/order")

router.get("/wizi/male/fashion/allOrders", async (req,res)=>{
    
    try{

        const orders = await order.findAll()

        res.status(200).json({Orders:orders})

    }catch(error){
        res.status(404).json({message:"something went wrong"})
    }


})

module.exports = router