const express = require("express");
const putData = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017';// timeout error 



putData.get("/",(req,res)=>
{
    res.json({msg:"inside putData success"});

    mongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        else
        {
            const db = connection.db("books");
            db.collection("booksc").find().toArray((err,arr) => {
                console.log(arr);
                res.send(arr);
            });
        }
    });

});

module.exports = putData;

