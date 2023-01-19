const express = require('express');
const app = express();
const morgan = require("morgan");
const { default: mongoose } = require('mongoose');
const cors = require("cors");
require("dotenv/config");
const PORT = process.env.PORT;

app.use(cors());
app.options("*", cors());
mongoose.set("strictQuery", true);
mongoose.pluralize(null);
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });


app.use('/getcategory', require('./routes/categories'));
app.use('/getusers', require('./routes/users'));
app.use('/getproducts', require('./routes/products'));
app.use('/getorders', require('./routes/orders'));
app.use('/getorderitems', require('./routes/order-items'));

app.use('/postcategory', require('./routes/categories'));
app.use('/postusers', require('./routes/users'));
app.use('/postproducts', require('./routes/products'));
app.use('/postorders', require('./routes/orders'));
app.use('/postorderitems', require('./routes/order-items'));

app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
});



// {
//     "id": "1",
//     "name": "aryan",
//     "email": "aryan@gmail.com",
//     "passwordHash": "12345",
//     "street": "abc",
//     "apartment": "xyz",
//     "city": "surat",
//     "zip": 123456,
//     "country": "ind",
//     "phone": "12345",
//     "isAdmin": true
// }