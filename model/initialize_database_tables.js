

const db_connection = require("../database/db_connection")
const user = require("./user")
const order = require("./order")

user.hasMany(order)
order.belongsTo(user)


//creating user and its assciation that is order 
//one to many relationship

// db_connection.sync({force:true}).then(()=>{
//     console.log("database tables created");
// }).catch((error)=>{
//     console.log(`tables not created ${error}`);
// })

module.exports = db_connection




