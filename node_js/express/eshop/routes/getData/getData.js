const express = require('express');
const mongoose = require('mongoose');
const getData = express.Router();
getData.use(express.json());
getData.use(express.urlencoded());


getData.get('/', (req, res) => {
    
    res.json({"msg":"default get"})
});


const Users = require('../../models/users');
getData.get('/users', (req, res) => {
    Users.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    })
    // res.json({"get":"Done users++++++++++++++++"})
});






module.exports = getData;
