// 2. Write a JS function that checks whether a passed string is palindrome or not? 

// Palindrome string--------------------------------------------
// using name function

// let prompt = require("prompt-sync")();

// function Palindro(string) 
// {
//     let len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] != string[len - 1 - i]) 
//         {
//             return "string is not a palindrome";
//         }
//     }
//     return "string is a palindrome";
// }

// const a = prompt('Enter a string: ');
// console.log(Palindro(a));


// Palindrome string --------------------------------------
// using anonymous

// let prompt = require("prompt-sync")();

// let Palindro=(string)=>{
//     const len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] === string[len - 1 - i]) 
//         {
//             return "string is a palindrome";
//         }
//     }
//     return "It is not a palindrome";
// }

// const a = prompt('Enter a string: ');
// console.log(Palindro(a));

// Palindrome string  -----------------------------------
// extra program

// let prompt = require("prompt-sync")();

// let Palindro=()=>{
//     const string = prompt('Enter a string: ');
//     const len = string.length;
//     for (let i = 0; i < len/2; i++) 
//     {
//         if(string[i] === string[len - 1 - i]) 
//         {
//             return "string is a palindrome";
//         }
//         else
//         {
//             return "It is not a palindrome";
//         }
//     }
// }

// // console.log(Palindro());
// console.log(Palindro());

// Palindrome string  -----------------------------------
// google program

// function a(str) 
// {
//     let reverse = str.split("")
//                      .reverse("")
//                      .join("")
//     if(reverse === str)
//     {
//         console.log("true")
//     }
//     else
//     {
//         console.log("false")
//     }
// };
// a("level")
// a("keval")
// a("skks")
