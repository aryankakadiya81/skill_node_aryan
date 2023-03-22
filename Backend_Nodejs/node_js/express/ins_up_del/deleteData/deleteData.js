const express = require("express");
const deleteData = express.Router();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017';// timeout error 



deleteData.delete("/",(req,res)=>
{
    // res.json({msg:"inside deleteData success"});

    mongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        else
        {
            const db = connection.db("book");
            db.collection("bookc").deleteOne(
                {isbn: req.body.isbn},(err,result) => {
                if (err) throw err;
                else{
                res.json({delete:"success"});
                console.log(`delete success`)
                };
            });
        }
    });

});

module.exports = deleteData;

