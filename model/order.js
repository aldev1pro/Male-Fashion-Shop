

const {DataTypes} = require("sequelize")
const db = require("../database/db_connection")

const order = db.define("order",{
    email:{
        type:DataTypes.STRING,
    },
    productName:{
        type:DataTypes.STRING,
    },
    size:{
        type:DataTypes.INTEGER,
    },
    noOfProductsToBuy:{
        type:DataTypes.INTEGER
    },
    locationOfUser:{
        type:DataTypes.STRING
    }
},
{freezeTableName:true})

module.exports = order