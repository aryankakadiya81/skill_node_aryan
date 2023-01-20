const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orders = require('../Models/ordersModel');

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Orders.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', (req, res) => {
    Orders.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

router.put('/', (req, res) => {
    Orders.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    Orders.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});

module.exports = router;