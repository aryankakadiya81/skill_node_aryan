const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../Models/usersModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.use(express.json());
router.use(express.urlencoded());


// router.get('/', (req, res) => {
//     Users.find({}, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         }
//     });
// });

router.get('/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(500).json({ massage: "The User with the give Id was not found....!" });
    }
    res.status(200).send(user);
});

router.post('/', (req, res) => {
    Users.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

router.post("/login", async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    const secret = process.env.SECRET;
    if (!user) {
        return res.status(400).send("The user not found");
    }
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
            },
            secret, { expiresIn: "1d" }
        );
        res.status(200).send({ user: user.email, token: token });
    }
    else {
        res.status(400).send("Password is worng....!");
    }
});


// router.put('/', (req, res) => {
//     User.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });

// });

router.put('/:id', async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.id,
        {

            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,

        }, { new: true });

    if (!user) return res.status(500).send("The Users cannot be Update.....!");
    res.send(user);
});

// router.delete('/', (req, res) => {
//     User.deleteOne(req.body, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         };
//     });
// });

router.delete('/:id', async (req, res) => {

    const user = await Users.findByIdAndRemove(req.params.id);

    if (!user) return res.status(500).send("The Users cannot be deleted.....!");
    res.send({ massage: "The User is deleted" });
});

module.exports = router;

module.exports = router;