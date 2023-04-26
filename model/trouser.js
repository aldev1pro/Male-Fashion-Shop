

const {DataTypes} = require("sequelize")
const db = require("../database/db_connection")

const trouser = db.define("trouser",{
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

//creating trouser table
//trouser.sync({force:true}).then(()=>console.log("cap table created"))


module.exports = trouser