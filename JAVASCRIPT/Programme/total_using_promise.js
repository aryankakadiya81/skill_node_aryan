// ------------------------------ ARYAN(WRONG) ----------------------------------
// let sum = (number1) => 
// {
//     let sum1 = 0;
//     console.log(number1);
//     while (number1 != 0) 
//     {
//         sum1 = sum1 + number1 % 10;
//         number1 = parseInt(number1 / 10);
//     }
//     if (sum1 > 9)
//     {
//         return sum(sum1);
//     }
//     return sum1;
// }

// let total = (number, sum) => 
// {
//     return new Promise(( resolve, reject )=>
//     {
//         if(number <= 9)
//         {
//             reject(console.log(number) )       
//         }
//         else
//         {
//             resolve(console.log(sum(number)))
//         }
//     })
// }
// // console.log(total(9999999988, sum));
//  console.log(total(1, sum));
// // console.log(total(123, sum));

// ------------------------------------gautam-------------------------------------

// let sum = (number) => {
//     while (number >= 9) {
//       let s = 0;
//       while (number != 0) {
//         s = s + number % 10;
//         number = parseInt(number / 10);
//       }
//       number = s;
//     }
//     return number;
//   }
  
//   let conti = (num, work) => {
//     return new Promise((resolve, reject) => {
//       if (num > 0) {
//         resolve(console.log(work(num)));
//       }
//       else {
//         reject(console.log(num));
//       }
//     });
//   };
  
  
//   let n = 9898989898;
//   conti(n, sum)


