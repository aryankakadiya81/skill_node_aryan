const express = require('express');
const mongoose = require('mongoose');
const products = express.Router();
products.use(express.json());
products.use(express.urlencoded());


const Products = require("../models/product");
products.get('/', (req, res) => {
    Products.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    })
    // res.json({"get":"Done products+++++++++++++++++"})
});

products.post('/', (req, res) => {
    Products.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


module.exports = products;

