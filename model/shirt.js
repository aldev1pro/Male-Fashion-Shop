

const {DataTypes} = require("sequelize")
const db = require("../database/db_connection")

const shirt = db.define("shirt",{
    productName:{
        type:DataTypes.STRING,
    },
    price:{
        type:DataTypes.INTEGER,
    },
    size:{
        type:DataTypes.INTEGER,
    },
    imageUrl:{
        type:DataTypes.STRING
    },
    itemsInStore:{
        type:DataTypes.INTEGER
    }
},
{freezeTableName:true})

//creating shirt table
//shirt.sync({force:true}).then(()=>console.log("cap table created"))

module.exports = shirt