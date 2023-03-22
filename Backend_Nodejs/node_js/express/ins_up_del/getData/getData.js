const express = require("express");
const getData = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017';// timeout error 



getData.get("/",(req,res)=>
{
    // res.json({msg:"inside getData success"});

    mongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        else
        {
            const db = connection.db("book");
            db.collection("bookc").find().toArray((err,arr) => {
                console.log(arr);
                res.json(arr);
            });
        }
    });

});

module.exports = getData;

