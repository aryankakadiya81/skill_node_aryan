const express = require("express");
const app = express();
const port = 2000;
app.use(express.json());
app.use(express.urlencoded());

app.get("/log", (req,res) => {
    res.sendFile(__dirname + "/file.html");
});

app.post("/log", (req,res) => {
    const request = req.body;
    console.log("data",request);
});


// not proper method ----------------------------------- 
// app.get("/log", (req,res) => {
//     const request = req.body;
//     console.log("data get",request);
// })
// ----------------------------------------------------- 

app.listen(port, () => {
    console.log(`port using ${port}`);
})