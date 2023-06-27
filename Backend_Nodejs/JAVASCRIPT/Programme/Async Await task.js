// Q1. Print "Hello, world" with a delay of 3 seconds

// function Aryan(){
//     setTimeout(() => {
//         let a = "hello world";
//         console.log(a);
//     },3000);
// }
// Aryan()


// --------------------------------------------------------------------------------

// Q2. Print numbers from 1 to 10 with delay of 1 second between each value being printed

// function print() 
// {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout( () =>{
//           console.log(i)
//         },i * 1000)
//       }
//   }
//   print();


// --------------------------------------------------------------------------------

// Q3. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval 

// var i = 1;
// setInterval(function() {
//   console.log(i);
//   i++;
// }, 100);




// --------------------------------------------------------------------------------

// Q4. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

// var i = 10;
// setTimeout(function() {
//   console.log(i);
//   i--;
//   if (i > 0) {
//     setTimeout(arguments.callee, 1000);
//   }
// }, 1000);


// --------------------------------------------------------------------------------

// Q5. Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times 

// function timer(init = 0, step = 1) {
//     var intervalId;
//     var count = init;

//     function startTimer() {
//         if (!intervalId) {
//             intervalId = setInterval(() => {
//                 console.log(count);
//                 count += step;
//             }, 1000);
//         }
//     }

//     function stopTimer() {
//         clearInterval(intervalId);
//         intervalId = null;
//     }

//     return {
//         startTimer,
//         stopTimer,
//     };
// }

// // driver code
// const timerObj = timer(100, 10);
// timerObj.startTimer();
// setTimeout(() => {
//     timerObj.stopTimer();
// }, 10000);



// --------------------------------------------------------------------------------

// Q6. Execute an array of asynchronous functions one after the other in sequence using callbacks

// function asyncFunc1(callback) {
//     console.log('Started asyncFunc1');
//     setTimeout(() => {
//         console.log('Completed asyncFunc1');
//         callback();
//     }, 3000);
// }

// function asyncFunc2(callback) {
//     console.log('Started asyncFunc2');
//     setTimeout(() => {
//         console.log('Completed asyncFunc2');
//         callback();
//     }, 2000);
// }

// function asyncFunc3(callback) {
//     console.log('Started asyncFunc3');
//     setTimeout(() => {
//         console.log('Completed asyncFunc3');
//         callback();
//     }, 1000);
// }

// function callbackManager(asyncFuncs) {
//     function nextFuncExecutor() {
//         const nextAsyncFunc = asyncFuncs.shift();
//         if (nextAsyncFunc && typeof nextAsyncFunc === 'function') {
//             nextAsyncFunc(nextFuncExecutor, asyncFuncs);
//         }
//     }
//     nextFuncExecutor();
// }

// // driver code
// callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);



// --------------------------------------------------------------------------------

// Q7. Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

// function asyncFunc1(callback) {
//     setTimeout(() => {
//         callback(1);
//     }, 3000);
// }

// function asyncFunc2(callback) {
//     setTimeout(() => {
//         callback(2);
//     }, 2000);
// }

// function asyncFunc3(callback) {
//     setTimeout(() => {
//         callback(3);
//     }, 1000);
// }
// function asyncParallel(asyncFuncArr, callback) {
//     const resultArr = new Array(asyncFuncArr.length);
//     let resultCounter = 0;

//     asyncFuncArr.forEach((async, index) => {
//         async(value => {
//             resultArr[index] = value;
//             resultCounter++;
//             if (resultCounter >= asyncFuncArr.length) {
//                 callback(resultArr);
//             }
//         });
//     });
// }

// asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
//     console.log(result);                                  
// });




// --------------------------------------------------------------------------------

// Q9. Execute 3 asynchronous functions one after the other in sequence using async await


// async function executor() {
//     try {
//         await asyncFunc1();
//         console.log('Async1 success');
//     } catch {
//         console.log('Async1 failure');
//     }
//     try {
//         await asyncFunc2();
//         console.log('Async2 success');
//     } catch {
//         console.log('Async2 failure');
//     }
//     try {
//         await asyncFunc3();
//         console.log('Async3 success');
//     } catch {
//         console.log('Async3 failure');
//     }
//     console.log('All succeeded');
// };
// executor()





// --------------------------------------------------------------------------------

// Q8. Execute 3 asynchronous functions one after the other in sequence using promise chaining





// --------------------------------------------------------------------------------

// Q10. Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failur