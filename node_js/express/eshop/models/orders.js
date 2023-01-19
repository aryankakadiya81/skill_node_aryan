const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    id: { type: String, required: true },
    orderiterms: { type: String, required: true },
    shippingAddress1: { type: String, required: true },
    shippingAddress1: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    Country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: Object, required: true },
    dateOrdered: { type: Date, required: true },
});


const order = mongoose.model("order", orderSchema);

module.exports = order;