const express = require("express");
login = express.Router();

login.get("/",(req,res) => {
    res.json({"msg": "default login"});
});

const enter = require("./enter");
login.use("/enter",enter);



module.exports = login;
