const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orderitems = require('../Models/orderitemsModel');

router.use(express.json());
router.use(express.urlencoded());


// router.get('/', (req, res) => {
//     Orderitems.find({}, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         }
//     });
// });

router.get('/:id', async (req, res) => {
    const orderitem = await Orderitems.findById(req.params.id);
    if (!orderitem) {
        res.status(500).json({ massage: "The Orderitem with the give Id was not found....!" });
    }
    res.status(200).send(orderitem);
});

router.post('/', (req, res) => {
    Orderitems.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

// router.put('/', (req, res) => {
//     Orderitems.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });

// });

router.put('/:id', async (req, res) => {
    const orderitem = await Orderitems.findByIdAndUpdate(req.params.id,
        {

            product: req.body.product,
            quantity: req.body.quantity

        }, { new: true });

    if (!orderitem) return res.status(500).send("The Orederitem cannot be Update.....!");
    res.send(orderitem);
});

// router.delete('/', (req, res) => {
//     Orderitems.deleteOne(req.body, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });
// });


router.delete('/:id', async (req, res) => {

    const orderitem = await Orderitems.findByIdAndRemove(req.params.id);

    if (!orderitem) return res.status(500).send("The Ordereitem cannot be deleted.....!");
    res.send({ massage: "The Orderitem is deleted" });
});


module.exports = router;