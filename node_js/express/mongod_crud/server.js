const express = require("express");
const app = express();
const port = 2600;
app.use(express.json());
// app.use(express.urlencoded());

const getData = require("./getData/getData");
app.use("/getdata",getData);


app.listen(port, ()=>{
    console.log(`port no ${port}`);
});