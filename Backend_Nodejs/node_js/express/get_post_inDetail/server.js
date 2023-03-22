const express = require("express");
const app = express();
const port = 2600;
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.json({"msg":"default server"});
});

const sign = require("./sign");
app.use("/sign",sign);

// http://localhost:2600/login?id=aryan&pwd=123
// app.get("/login",(req,res) => {
//     a = req.query;
//     console.log(a);
// });

// http://localhost:2600/login/123/aryan
// app.get("/login/:id/:pwd",(req,res) => {
//     console.log(req.params);
// })



app.listen(port,() => {
    console.log(`port no ${port}`);
});

