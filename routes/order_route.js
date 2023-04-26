
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const order = require("../model/order")
const cap = require("../model/cap")
const shirt = require("../model/shirt")
const trouser = require("../model/trouser")
const shoe = require("../model/watch")
const watch = require("../model/shirt")


router.post("/wizi/male/fashion/order", async (req,res)=>{

    //capturing the token and extracting data from it
    const header = req.headers.authorization
    const token = header.split(" ")[1]
    let email

    try{
        //checking whether token wasn't tampared
        jwt.verify(token, process.env.ACCESS_TOKEN,(err,data)=>{
        if(err) return res.status(400).json("Token not found")
        email = data.email
        
    })
    
    //destructing request body
    const {productName,size,noOfProductsToBuy,locationOfUser,userId} = req.body
     
        //finding the product user wants to buy from any of the tables in the database
        const capData = await cap.findOne({where:{productName:productName}})   
        const shirtData = await shirt.findOne({where:{productName:productName}})
        const trouserData = await trouser.findOne({where:{productName:productName}})
        const shoeData = await shoe.findOne({where:{productName:productName}})
        const watchData = await watch.findOne({where:{productName:productName}})
    
    //further check on the store before allowing ordering
    if(capData){
        if(capData.itemsInStore < noOfProductsToBuy){
           return res.status(400).json({message:`Please lower the item; only ${capData.itemsInStore} is available`})
        }

        let num = capData.itemsInStore - noOfProductsToBuy
        capData.itemsInStore = num
        capData.set({
            capData
        })

        await capData.save()

        //adding it to orders table
        await order.create({
            email,
            productName,
            size,
            noOfProductsToBuy,
            locationOfUser,
            userId
        })
        console.log(`Yes saved ${capData}`);
        return res.status(200).json({Cap:capData})
    }
    if(shirtData){
        if(shirtData.itemsInStore < noOfProductsToBuy){
            return res.status(400).json({message:`Please lower the item; only ${shirtData.itemsInStore} is available`})
         }

        let num = shirtData.itemsInStore - noOfProductsToBuy
        shirtData.itemsInStore = num
        shirtData.set({
            shirtData
        })
        await shirtData.save()

        //adding it to orders table
        await order.create({
        email,
        productName,
        size,
        noOfProductsToBuy,
        locationOfUser,
        userId
    })

        console.log(`Yes saved ${shirtData}`);
      // return res.status(200).json({Shirt:shirtData})
     return res.status(200).json({message:"Order has been made successufully"})

    }
    if(trouserData){
        if(trouserData.itemsInStore < noOfProductsToBuy){
            return res.status(400).json({message:`Please lower the item; only ${trouserData.itemsInStore} is available`})
         }

        let num = trouserData.itemsInStore - noOfProductsToBuy
        trouserData.itemsInStore = num
        trouserData.set({
            trouserData
        })
        await trouserData.save()

          //adding it to orders table
          await order.create({
            email,
            productName,
            size,
            noOfProductsToBuy,
            locationOfUser,
            userId
        })
    
        console.log(`Yes saved ${trouserData}`);
        //return res.status(200).json({Trouser:trouserData})
        return res.status(200).json({message:"Order has been made successufully"})

    }
    if(shoeData){
        if(shoeData.itemsInStore < noOfProductsToBuy){
            return res.status(400).json({message:`Please lower the item; only ${shoeData.itemsInStore} is available`})
         }

        let num = shoeData.itemsInStore - noOfProductsToBuy
        shoeData.itemsInStore = num
        shoeData.set({
            shoeData
        })
        await shoeData.save()

          //adding it to orders table
          await order.create({
            email,
            productName,
            size,
            noOfProductsToBuy,
            locationOfUser,
            userId
        })
    
        console.log(`Yes saved ${shoeData}`);
       // return res.status(200).json({Shoe:shoeData})
       return res.status(200).json({message:"Order has been made successufully"})

    }
    if(watchData){
        if(shoeData.itemsInStore < noOfProductsToBuy){
            return res.status(400).json({message:`Please lower the item; only ${shoeData.itemsInStore} is available`})
         }

        let num = watchData.itemsInStore - noOfProductsToBuy
        watchData.itemsInStore = num
        watchData.set({
            watchData
        })
        await watchData.save()

          //adding it to orders table
          await order.create({
            email,
            productName,
            size,
            noOfProductsToBuy,
            locationOfUser,
            userId
        })
    
        console.log(`Yes saved ${watchData}`);
        //return res.status(200).json({Watch:watchData})
        return res.status(200).json({message:"Order has been made successufully"})
    }
    
}catch(error){
    return res.status(404).json({message:"order wasn't complete please try again",error})
}


})


module.exports = router