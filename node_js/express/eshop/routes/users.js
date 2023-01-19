const express = require('express');
const mongoose = require('mongoose');
const users = express.Router();
users.use(express.json());
users.use(express.urlencoded());


const Users = require('../models/users');
users.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    Users.insertMany(data, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    })
    // res.json({"get":"Done category+++++++++++++++++"})
});

users.get('/', (req, res) => {
    Users.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
            console.log(result);
        }
    });
});

module.exports = users;

