const express = require("express");
dashbord = express.Router();

dashbord.use(express.json());
dashbord.use(express.urlencoded());

dashbord.get("/",(req,res) => {
    res.json({"msg":"you are in dashbord"});
})

module.exports = dashbord;