const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "pro",
    port: 3306,
});

connection.connect(function (error) {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("database connected successfully__!!");
    }
});

app.get("/get", (req,res) => {
    connection.query("select * from users", function (err,rows) {
        if(err){
            res.json({error:err});
        }
        else{
            res.json({Data: rows});
        }
    });
});

app.post("/insert", (req,res) => {
    let { name, email, position } = req.body;
    let errors=false;

    if(name.length === 0 || email.length === 0 || position === 0)
    {
        errors=true;
        res.json("error","pleses reenter data");
    }
    if(!errors)
    {
        var from_data = {
            name : name,
            email : email,
            position : position,

        };
        connection.query("insert into users set ?", from_data, (err,result) => {
            if(err)
            {
                res.json({error : err});
            }
            else
            {
                res.json({success: "user added"});
            }
        });
    }
});

app.put("/update/:id", (req,res) => {
    let id = req.params.id;
    let { name, email, position } = req.body;
    let errors=false;
    if(name.length === 0 || email.length === 0 || position === 0)
    {
        errors=true;
        res.json("error","pleses reenter data");
    }
    if(!errors)
    {
        var from_data = {
            name : name,
            email : email,
            position : position,

        };
        connection.query("update users set ? where id = " + id, from_data, (err,result) => {
            if(err)
            {
                res.json({error : err});
            }
            else
            {
                res.json({success: "user updated"});
            }
        });
    }
});

app.delete("/delete/:id", (req,res) => {
    let id = req.params.id;
    let errors=false;
    if(!errors)
    {
        
        connection.query("delete from users where id = " + id, (err,result) => {
            if(err)
            {
                res.json({error : err});
            }
            else
            {
                res.json({success: "user deleted"});
            }
        });
    }
});
port = process.env.port;
app.listen(port, () => {
    console.log(`port no ${port}`);
});
