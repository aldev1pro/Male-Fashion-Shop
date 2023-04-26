
const {Sequelize} = require("sequelize")
const db_config = require("./db_config")

const sequelize = new Sequelize(
    db_config.DATABASE,
    db_config.USER,
    db_config.PASSWORD,{
        dialect:db_config.DIALECT,
        host:db_config.HOST
    }
)

try{
sequelize.authenticate()
console.log(`database connection working `)
}catch(error){
    console.log(`this is an error from the database connection ${error}`);
}

module.exports = sequelize