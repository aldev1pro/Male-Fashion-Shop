
const express = require("express")
const router = express.Router()
const trouser = require("../model/trouser")
//const ipAddress = "192.168.0.112"
const ipAddress = "127.0.0.1"

 router.use("/images",express.static("images/fashion-trouser"))

 router.get("/addTrouser", async (req,res)=>{

    try{
    await trouser.bulkCreate([
    {
        productName:"Bigy",
        price:400,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/bigy.jpg`
    },
    {
        productName:"Brownish",
        price:590,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/brownish.jpg`
    },
    {
        productName:"Chaz",
        price:400,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/chaz.jpg`
    },
    {
        productName:"Cooley",
        price:400,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/cooley.jpg`
    },
    {
        productName:"Dembs",
        price:300,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/dembs.jpg`
    },
    {
        productName:"Bubz",
        price:500,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/bubz.jpg`
    },
    {
        productName:"Gang",
        price:300,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/gang.jpg`
    },
    {
        productName:"Kaki",
        price:490,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/kaki.jpg`
    },
    {
        productName:"Love",
        price:200,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/love.jpg`
    },
    {
        productName:"Office",
        price:700,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/office.jpg`
    },
    {
        productName:"RedWhite",
        price:870,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/redwhite.jpg`
    },
    {
        productName:"Full",
        price:490,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/full.jpg`
    },
    {
        productName:"Smatiz",
        price:300,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/smatiz.jpg`
    },
    {
        productName:"Soldier",
        price:900,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/soldier.jpg`
    },
    {
        productName:"Lacoste",
        price:1000,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/lacoste.jpg`
    },
    {
        productName:"Sweat",
        price:470,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/sweat.jpg`
    },
    {
        productName:"Yati",
        price:500,
        size:9,
        itemsInStore:10,
        imageUrl:`http://${ipAddress}:3000/images/yati.jpg`
    },
   
]

).then(() => console.log("Users data have been saved"))

}catch(err){
    res.status(404).json({message:"something went wrong"})
}
})


module.exports = router