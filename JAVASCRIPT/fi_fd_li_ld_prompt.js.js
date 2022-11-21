let prompt = require("prompt-sync")();
let arr = [];

function fi_in()
{
    let a = parseInt(prompt("enter value for first insert = "));
    arr.unshift(a);
    console.log(arr);
}

function la_in()
{
    let b = parseInt(prompt("enter value for last insert = "));
    arr.push(b);
    console.log(arr);
}
function la_de()
{
    arr.pop();
    console.log(arr);
}
function fi_de()
{
    arr.shift();
    console.log(arr);
}

la_in();
fi_in();
console.log("final = ",arr)