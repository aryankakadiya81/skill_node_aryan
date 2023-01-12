const express = require("express");
const putData = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017';// timeout error 



putData.put("/",(req,res)=>
{
    res.json({msg:"inside putData success"});

    mongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        else
        {
            const db = connection.db("book");
            db.collection("bookc").updateOne(
                {isbn: req.body.isbn},
                {$set:{down: req.body.down}}
            ),(err,result) => {
                if (err) throw err;
                res.send({update:"success"});
            };
        }
    });

});

module.exports = putData;

