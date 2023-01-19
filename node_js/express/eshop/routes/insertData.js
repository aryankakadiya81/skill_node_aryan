const express = require('express');
const mongoose = require('mongoose');
const insertData = express.Router();
const Products = require('../models/product');
const Orders = require('../models/orders');
const Orderitems = require('../models/order-item');
insertData.use(express.json());
insertData.use(express.urlencoded());

insertData.get('/', (req, res) => {
    res.json({ 'msg': "default insertdata....!" })
});











module.exports = insertData;