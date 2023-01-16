const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const data = require("./data");
const User = require("./userModel");

mongoose.set("strictQuery", true);

const app = express();
const port = 3300;
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded());


mongoose.connect('mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/aryan?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.log(err);
  });

app.post("/insert_records", (req,res) => {
    console.log(data.users);
    const result = User.insertMany(data.users);
    res.send(result); 
})

app.listen(port, ()=>{
    console.log(`port no ${port}`);
});