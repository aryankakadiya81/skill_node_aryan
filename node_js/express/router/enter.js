const express = require("express");
enter = express.Router();

enter.get("/", (req,res) => {
    res.json({"msg": "default enter"})
})

enter.get("/log", (req,res) => {
    res.sendFile(__dirname + "/log.html");
});

enter.post("/log", (req,res) => {
    const request = req.body;
    console.log("data",request);
});

module.exports = enter;

