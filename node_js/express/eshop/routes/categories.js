const express = require('express');
const mongoose = require('mongoose');
const categories = express.Router();
categories.use(express.json());
categories.use(express.urlencoded());

const Category = require('../models/category');
categories.get('/', (req, res) => {
    Category.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    })
    // res.json({"get":"Done category+++++++++++++++++"})
});

categories.post('/', (req, res) => {
    const result = Category.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});

module.exports = categories;

