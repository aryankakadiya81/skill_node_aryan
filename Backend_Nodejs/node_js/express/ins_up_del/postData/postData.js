const express = require("express");
const postData = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017';// timeout error 



postData.post("/",(req,res)=>
{
    

    mongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        else
        {
            const db = connection.db("book");
            db.collection("bookc").insertOne(
                {
                  "isbn": req.body.isbn,
                  "down": req.body.down,
                  "rev": req.body.rev
                },
                (err,arr) => {
                if(err) throw err;
                else
                {
                    res.send({"post":"success"});
                }
                });
        }
    });

});

module.exports = postData;

