
const express = require("express")
const app = express()


function verifyToken(req,res,next){
    const header = req.headers["authorization"]
    const token = header.split(" ")[1]
    
}


module.exports = verifyToken