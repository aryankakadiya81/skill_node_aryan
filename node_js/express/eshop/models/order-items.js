const mongoose = require("mongoose");

const OrderItemsScheme = new mongoose.Schema({

    id : { type: String, require: true},
    product: { type: Object,require: true},
    quantity: { type: Number,require: true},

});

const orderitems = mongoose.model("orderitems",OrderItemsScheme);

module.exports = orderitems;