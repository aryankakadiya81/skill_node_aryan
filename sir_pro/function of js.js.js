// // 21/11/2022
// function test👎
// {
//     console.log(` inside function ... ${n}`);   //template literal
//     return []; 
// }

// let n = test(10);
// console.log(typeof n);

// 22/11/2022

// //     function
// //     ********
// //         business logic called as function
// //         functions are used to reuse the business logic
// //         we have following types of functions upto "ES13"
// //         1) named functions
// //         2) anonymous functions
// //         3) rest parameters in functions
// //         4) default parameters in functions
// //         5) optional parameters in functions
// //         6) generators
// //         7) constructor functions
// //         8) IIFE  (Immidiate Invokable functional Expressions)  

// named function

//     the function with the particular name called as named function
//     Syntax

//     1) function definition
//     2) function calling

// function definition

//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }
// function calling

//    functionname(param1,param2,param3,param4,.....paramn);







// function fun_one(){
//     return "welcome to named functions";
// }
// console.log( fun_one() );  

// function fun_one(){
//     return "welcome";
// }
// console.log( fun_one );

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");
// fun_one("ReactJS","NodeJS");
// fun_one();
// fun_one(undefined, "NodeJS");
// fun_one(null, null, null);
// fun_one(null, " ",null);
// fun_one(null, {},[]);

// function fun_zero() {
//   console.log("inside  fun_zero()");
//   return "Hello";
// }
// function fun_one() {
//   console.log("inside  fun_one()");
//   return fun_zero();
// }
// function fun_two() {
//   console.log("inside  fun_two()");
//   return fun_one();
// }
// console.log(fun_two());


// function fun_one() {
//     return "Hello";
//   }
//   function fun_two() {
//     return fun_one;
//   }  
//   console.log(fun_two()());
  
  // function fun_one(arg1, arg2, arg3) {
  //   console.log(arg1(), arg2(), arg3());
  //   // console.log(arg1, arg2, arg3);
  // }
  // function fun_two() {
  //   return "Hello_1";
  // }
  // function fun_three() {
  //   return "Hello_2";
  // }
  // function fun_four() {
  //   return "Hello_3";
  // }
  // fun_one(fun_two, fun_three, fun_four);
  
  // let arr = [];
  // function fun_one() {
  //   return "Hello";
  // }
  // for (let i = 0; i < 5; i++) {
  //   arr.push(fun_one);
  // }
  // console.log(arr[0]());
  // for (let j = 0; j < 5; j++) {
  //   console.log(arr[j]());
  // }
  
  // let fun_one = "Hello_1";
  // function fun_one() {
  //   return "Hello_2";
  // }
  // console.log( fun_one());
  
  // function fun_one() {
  //   return var_one;
  // }
  // console.log(fun_one());
  // var var_one = "Hello_1";
  // console.log(fun_one());
  
  // function fun_one() {
  //   var var_one = "Hello_1";
  // }
  // fun_one();
  
  // console.log(var_one);
  
  //     anonymous functions
  //     *******************
  //         - the function without name called as anonymous function
  //         - anonymous functions also called as "arrow" functions/"lamda" functions/"callback" functions
  //         - we will represent arrow functions with "=>"
  //         - "=>" introduced in ES6
  // Syntax:
  // ******
  //     1) function definition
  //     2) function calling
  //     function definition
  //     *******************
  //     var/let/const variablename = (arg1,arg2,arg3,....argn)=>{
  //         //business logic
  //     }
  //     function calling
  //     ****************
  //     variablename(param1,param2,param3,.....paramn);
  
  // let fun_one = () => "welcome to arrow functions");
  // console.log(fun_one());
  
  // let fun_one = () => "hello";
  // console.log(fun_one());
  
  // let fun_one = (arg1, arg2, arg3) => {
  //   console.log(arg1, arg2, arg3);
  // };
  // fun_one("Angular13", "NodeJS", "MongoDB");
  // fun_one("ReactJS", "NodeJS", "MongoDB");
  // fun_one("VueJS", "NodeJS", "MongoDB");
  // fun_one();
  // fun_one(undefined, "Hello_2");
  // fun_one(null, null, null);
  
  // let fun_one = () => {
  //   return "Hello";
  // };
  // console.log(fun_one);
  
  // let fun_one = () => {
  //   return () => {
  //     return () => {
  //       return "Hello";
  //     };
  //   };
  // };
  // console.log(fun_one()()());
  
  // let fun_one = (arg1, arg2, arg3) => {
  //   console.log(arg1(), arg2(), arg3());
  // };
  // fun_one(
  //   () => {
  //     return "Hello_1";
  //   },
  //   () => {
  //     return "Hello_2";
  //   },
  //   () => {
  //     return "Hello_3";
  //   }
  // );
  // fun_one(
  //   () => "Hello_1",
  //   () => "Hello_2",
  //   () => "Hello_3"
  // );