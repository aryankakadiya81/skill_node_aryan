const express = require("express");
const app = express();
const port = 2500;
app.use(express.json());
app.use(express.urlencoded());


app.get("/",(req,res) => {
    res.json({msg:"server default"});
});  

const login = require("./login");
app.use("/login",login);


app.listen(port,() => {
    console.log(`server listing ${port}`);
})