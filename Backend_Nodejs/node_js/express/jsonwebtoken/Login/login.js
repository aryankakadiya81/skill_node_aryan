const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const tokenObj = require("../Token/token");
login = express.Router();


// login.get("/", (req, res) => {
//     res.json({ 'msg': "inside default login" })
// });

login.get("/",(req,res)=>{
    const id = req.body.id;
    const pwd = req.body.pwd;
    if(id == "aryan" && pwd == "aryan123")
    {
        const token = jsonwebtoken.sign({id:id,pwd:pwd},"skill",{expiresIn : "60s"});
        tokenObj.token = token;
        res.json({login:"Success",token:token});
    }
    else {
        res.json({login:"Fail"});
    }
});

module.exports = login;