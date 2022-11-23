// Palindrome string--------------------------------------------
// let prompt = require("prompt-sync")();

// function Palindro(string) 
// {
//     const len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] != string[len - 1 - i]) 
//         {
//             return "string is not a palindrome";
//         }
//     }
//     return "It is a palindrome";
// }

// const a = prompt('Enter a string: ');
// console.log(Palindro(a));


// Palindrome string //anonymous--------------------------------------
let prompt = require("prompt-sync")();

let Palindro=(string)=>{
    const len = string.length;
    for (let i = 0; i < len/2; i++) 
    {
        if(string[i] === string[len - 1 - i]) 
        {
            return "string is a palindrome";
        }
    }
    return "It is not a palindrome";
}

const a = prompt('Enter a string: ');
console.log(Palindro(a));
