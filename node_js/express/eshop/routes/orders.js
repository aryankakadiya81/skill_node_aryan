const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orders = require('../Models/ordersModel');

router.use(express.json());
router.use(express.urlencoded());


// router.get('/', (req, res) => {
//     Orders.find({}, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         }
//     });
// });

router.get('/:id', async (req, res) => {
    const order = await Orders.findById(req.params.id);
    if (!order) {
        res.status(500).json({ massage: "The Order with the give Id was not found....!" });
    }
    res.status(200).send(order);
});

router.post('/', (req, res) => {
    Orders.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

// router.put('/', (req, res) => {
//     Orders.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });

// });

router.put('/:id', async (req, res) => {
    const order = await Orders.findByIdAndUpdate(req.params.id,
        {

            orderiterms: req.body.orderiterms,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: req.body.totalPrice,
            user: req.body.user

        }, { new: true });

    if (!order) return res.status(500).send("The Order cannot be Update.....!");
    res.send(order);
});


// router.delete('/', (req, res) => {
    //     Orders.deleteOne(req.body, (err, result) => {
        //         if (err) throw err;
        //         else {
            //             res.send(result);
//         };
//     });
// });

router.delete('/:id', async (req, res) => {

    const order = await Orders.findByIdAndRemove(req.params.id);

    if (!order) return res.status(500).send("The Order cannot be deleted.....!");
    res.send({ massage: "The Order is deleted" });
});

module.exports = router;