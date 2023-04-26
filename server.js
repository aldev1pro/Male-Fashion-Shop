
const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
const jwt = require("jsonwebtoken")

//routes to access the products stored in the database
const db = require("./model/initialize_database_tables")
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
const order_route = require("./routes/order_route")
const cap_route  = require("./routes/cap_route")
const shirt_route  = require("./routes/shirt_route")
const trouser_route  = require("./routes/trouser_route")
const shoe_route  = require("./routes/shoe_route")
const watch_route = require("./routes/watch_route")
const home_route = require("./routes/home_route")
const whoOrderd_route = require("./routes/whoOrdered_route")



//adding producst to the database tables
const addCap = require("./addProductsToDatabase/addCap")
const addShirt = require("./addProductsToDatabase/addShirt")
const addTrouser = require("./addProductsToDatabase/addTrouser")
const addShoe = require("./addProductsToDatabase/addShoe")
const addWatch = require("./addProductsToDatabase/addWatch")



app.use("/", signUp)
app.use("/", signIn)
app.use("/", order_route)
app.use("/", cap_route)
app.use("/", shirt_route)
app.use("/", trouser_route)
app.use("/", shoe_route)
app.use("/", watch_route)
app.use("/", home_route)
app.use("/", whoOrderd_route)


app.use("/", addCap)
app.use("/", addShirt)
app.use("/", addTrouser)
app.use("/", addShoe)
app.use("/", addWatch)


//server listening on port 3000
app.listen(3000,()=>{
    console.log("Testing the app");
})
