const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderiterms: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItems",required: true },],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    dateOrdered: { type: Date, default: Date.now() },
});

ordersSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

ordersSchema.set("toJSON", {
    virtuals: true,
})

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;

/* 
{
        "orderiterms": [
            {
                "quantity": 3,
                "product": "63ca9061f66bec6e922df38d"
            },
            {
                "quantity": 2,
                "product": "63ca9061f66bec6e922df38d"
            }
        ],
            "shippingAddress1": "SkillQode",
            "shippingAddress2": "MicraSolution",
            "city": "Surat",
            "zip": "395010",
            "Country": "India",
            "phone": 9499556267,
            "user": "63c8d19c90e8188aac67f724",
}
*/
