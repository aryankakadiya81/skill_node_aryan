// function getSum(n)
// {
//     let sum = 0;
//     while (n != 0) 
//     {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     return call_back(sum)
// }
// function check(val)
// {
//     if(val <= 9 && val >= 0)
//     {
//         return 1;
//     }
//     else
//     {
//         return getSum(val);
//     }
// }
// function total(n,call_back)
// {
//     return callback(n);
// }

// console.log(total(123456,getSum))

// -----------------------------------------

// let sum = (number1) => 
// {
//     let sum1 = 0;
//     console.log(number1);
//     while (number1 != 0) 
//     {
//         sum1 = sum1 + number1 % 10;
//         number1 = parseInt(number1 / 10);
//     }
//     return sum1;
// }

// let check = (value) => 
// {
//     if (value <= 9) 
//     {
//         return value;
//     }
//     else 
//     {
//        return 0;
//     }
// }
// let total = (number, callback) => 
// {
//     let n =  callback(number);
//     if(n>=9)
//         return sum(n);
// }

// let number = 123456;
// console.log(total(number, sum));