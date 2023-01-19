const express = require('express');
const mongoose = require('mongoose');
const orders = express.Router();
orders.use(express.json());
orders.use(express.urlencoded());


const Orders = require('../models/orders');
orders.get('/', (req, res) => {
    Orders.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    })
    // res.json({"get":"Done orders+++++++++++++++++"})
});

orders.post('/', (req, res) => {
    const result = Orders.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


module.exports = orders;

