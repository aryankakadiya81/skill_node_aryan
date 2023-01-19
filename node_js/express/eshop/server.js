const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3300;

// app.get('/', (req, res) => {
//     res.json({ 'msg': "default" });
// });

mongoose.connect('mongodb+srv://admin:admin@cluster0.dc5mmuk.mongodb.net/eshop?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

const users = require("./models/users");
app.use("/users",users);

app.post("/iuser", (req,res) => {
        // console.log(models.users);
        const result = users.insertOne(req.body);
        res.send(result); 
    });


    // app.post("/insertData", (req,res) => {
    //     console.log(data.users);
    //     const result = User.insertMany(data.users);
    //     res.send(result); 
    // })
    

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