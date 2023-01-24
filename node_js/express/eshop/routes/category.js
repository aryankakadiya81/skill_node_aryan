const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


// router.get('/', (req, res) => {
//     Category.find({}, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         }
//     });
// });

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({ massage: "The Category with the give Id was not found....!" });
    }
    res.status(200).send(category);
});



router.post('/', (req, res) => {
    Category.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});
// router.put('/', (req, res) => {
//     Category.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });

// });

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {

            name: req.body.name,
            color: req.body.color,
            icon: req.body.icon,
            image: req.body.image

        }, { new: true });

    if (!category) return res.status(500).send("The category cannot be Update.....!");
    res.send(category);
});


// router.delete('/', (req, res) => {
    //     Category.deleteOne(req.body, (err, result) => {
        //         if (err) throw err;
        //         else {
            //             res.send(result);
            //         };
            //     });
            // });
            
router.delete('/:id', async (req, res) => {

    const category = await Category.findByIdAndRemove(req.params.id);

    if (!category) return res.status(500).send("The category cannot be deleted.....!");
    res.send({ massage: "The category is deleted" });
});
            
module.exports = router;