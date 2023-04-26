


const express = require("express")
const router = express.Router()
const cap = require("../model/watch")
const watch = require("../model/watch")
//const ipAddress = "192.168.0.112"
const ipAddress = "127.0.0.1"
router.use("/images",express.static("images/fashion-watch"))

router.get("/addWatch", async (req,res)=>{

    try{
    await watch.bulkCreate([
       {
           productName:"Army",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/army.jpg`
       },
       {
           productName:"Bamf",
           price:200,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/bamf.jpg`
       },
       {
           productName:"Blaze",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/blaze.jpg`
       },
       {
           productName:"Box",
           price:150,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/box.jpg`
       },
       {
           productName:"BrownSmall",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/brownsmall.jpg`
       },
       {
           productName:"Cartel",
           price:500,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/cartel.jpg`
       },
       {
           productName:"Comapass",
           price:240,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/compass.jpg`
       },
       {
           productName:"Display",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/display.jpg`
       },
       {
           productName:"Fig",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/fig.jpg`
       },
       {
           productName:"Git",
           price:200,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/git.jpg`
       },
       {
           productName:"HotCoverd",
           price:700,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/hotcoverd.jpg`
       },
       {
           productName:"Glory",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/glory.jpg`
       },
       {
           productName:"Gold",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/gold.jpg`
       },
       {
           productName:"Kitt",
           price:250,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/kitt.jpg`
       },
       {
           productName:"Quartz",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/quartz.jpg`
       },
       {
           productName:"Real",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/real.jpg`
       },
       {
           productName:"Roll",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/roll.jpg`
       },
       {
           productName:"Niky",
           price:200,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/niky.jpg`
       },
       {
           productName:"Running",
           price:250,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/running.jpg`
       },
       {
           productName:"Silver",
           price:400,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/silver.jpg`
       },
       {
           productName:"Spam",
           price:200,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/spam.jpg`
       },
       {
           productName:"Sunshine",
           price:300,
           size:9,
           itemsInStore:10,
           imageUrl:`http://${ipAddress}:3000/images/sunshine.jpg`
       },
       {
        productName:"Ten",
        price:200,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/ten.jpg`
    },
    {
        productName:"Toshib",
        price:300,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/toshib.jpg`
    },
    {
        productName:"Toxido",
        price:140,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/toxido.jpg`
    },
    {
        productName:"ZZ",
        price:300,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/zz.jpg`
    },
    
   ]
   
   ).then(() => console.log("Users data have been saved"));
   
}catch(error){
    res.status(404).json({message:"something went wrong"})
}

})

module.exports = router