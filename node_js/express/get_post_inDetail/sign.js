const express = require("express");
sign = express.Router();

sign.use(express.json());
sign.use(express.urlencoded());



// sign.get("/login",(req,res) => {
//     a = req.query;
//     console.log(a);
// });

sign.get("/login/:id/:pwd",(req,res) => {
    console.log(req.params);
});

module.exports = sign;
