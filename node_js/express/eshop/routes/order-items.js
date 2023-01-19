const express = require('express');
const mongoose = require('mongoose');
const orderitems = express.Router();
orderitems.use(express.json());
orderitems.use(express.urlencoded());


const Orderitems = require("../models/order-item");
orderitems.get('/', (req, res) => {
    Orderitems.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    })
    // res.json({"get":"Done orderitems+++++++++++++++++"})
});

orderitems.post('/', (req, res) => {
    const result = Orderitems.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


module.exports = orderitems;

