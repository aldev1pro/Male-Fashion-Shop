
const {DataTypes} = require("sequelize")
const db = require("../database/db_connection")

const cap = db.define("cap",{
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

//creating cap table
//cap.sync({force:true}).then(()=>console.log("cap table created"))

module.exports = cap