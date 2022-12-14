const express = require("express");
const app = express();
const port = 2500;

app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res) => {
    res.json({msg:"default server"});
});

const login = require("./Login/login");
app.use("/login",login);

const module1 = require("./Module1/module1");
app.use("/module1",module1);

const module2 = require("./Module2/module2");
app.use("/module2",module2);

app.listen(port,() => {
    console.log(`port no ${port}`);
});