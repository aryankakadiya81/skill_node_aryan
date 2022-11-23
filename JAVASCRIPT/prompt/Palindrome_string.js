let prompt = require("prompt-sync")();


function palindrome()
{
    let str = parseInt(prompt("enter string = "));
    let len = str.length
    let revarr = string.reverse();
    let join = revarr.join("");
    
    if(str == join)
    {
        console.log(`string is palindrome`);
    }
    else
    {
        console.log(`string is NOT palindrome`);
    }
}

palindrome();