const express = require("express");
const app = express();
const port = 2600;
app.use(express.json());
// app.use(express.urlencoded());

const getData = require("./getData/getData");
app.use("/getdata",getData);

const deleteData = require("./deleteData/deleteData");
app.use("/deleteData",deleteData);

const postData = require("./postData/postData");
app.use("/postData",postData);

const putData = require("./putData/putData");
app.use("/putData",putData);

app.listen(port, ()=>{
    console.log(`port no ${port}`);
});