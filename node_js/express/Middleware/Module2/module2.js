const express = require("express");
const middleware = require("../Middleware/middleware");
module2 = express.Router();

module2.get("/",[middleware],(req,res)=>
{
    res.json({msg:"inside module2 success"});
});

module.exports = module2;