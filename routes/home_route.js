
const express = require("express")
const router = express.Router()
const cap = require("../model/cap")
const shirt = require("../model/shirt")
const trouser = require("../model/trouser")
const shoe = require("../model/shoe")
const watch = require("../model/watch")
const {Op} = require("sequelize")

router.get("/wizi/male/fashion/getProducts", async (req,res)=>{

    try{

    //cap
    const capData = await cap.findAll({
        where:{
            id:{
                [Op.between]:[1,5]
            }
        }
    })

    //shirt
    const shirtData = await shirt.findAll({
        where:{
            id:{
                [Op.between]:[1,5]
            }
        }
    })
    
    //trouser
    const trouserData = await trouser.findAll({
        where:{
            id:{
                [Op.between]:[1,5]
            }
        }
    })

    //shoe
    const shoeData = await shoe.findAll({
        where:{
            id:{
                [Op.between]:[1,5]
            }
        }
    })

    //watch
    const watchData = await watch.findAll({
        where:{
            id:{
                [Op.between]:[1,5]
            }
        }
    })

    const selectingFewDataFromAllTables = [shirtData,shoeData,trouserData,capData,watchData]

    res.status(200).json({products:selectingFewDataFromAllTables})
    
}catch(error){
    res.status(404).json({massage:"something went wrong"})
}


})

module.exports = router