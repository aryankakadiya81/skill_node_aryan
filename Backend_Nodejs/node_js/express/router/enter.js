const express = require("express");
enter = express.Router();

enter.use(express.json());
enter.use(express.urlencoded());

// enter.get("/", (req,res) => {
//     res.json({"msg": "default enter"})
// })

enter.get("/", (req,res) => {
    res.sendFile(__dirname + "/log.html");
});

enter.post("/", (req,res) => {
    const request = req.body;
    const requesti = req.body.id;
    const requestp = req.body.pwd;
    if(requesti == requestp)
    {
        // res.json({"msg":"on dashbord"});
        console.log("data",request);
        const dashbord = require("./dashbord");
        enter.use("/dashbord",dashbord);
    }
    else
    {
        // res.json({"msg":"error reset password"});
        const enter = require("./enter");
        enter.use("/enter",enter);
    }
});

module.exports = enter;

