

const {DataTypes} = require("sequelize")
const db = require("../database/db_connection")

const user = db.define("user",{
    firstName:{
        type:DataTypes.STRING,
    },
    lastName:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    hashPassword:{
        type:DataTypes.STRING
    },
    
},
{freezeTableName:true})

module.exports = user