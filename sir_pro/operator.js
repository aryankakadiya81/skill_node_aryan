// 15/11/2022

// console.log(10+20); //30
// console.log(10+"20"); 
// console.log(10+'20'); 
// console.log(10 + +'20'); 
// console.log(typeof +'20'); 

// console.log(10 + +'20' + 20); 
// console.log(10 * '20'); 
// console.log(10 / '20'); 

// true     1
// false    0 

// console.log(true+true);
// console.log(true+false);

// console.log(True+1);

// console.log(true+10+20/5*false);
// console.log(true/false);

// console.log(20*5/false);
// console.log(10+20/5*4-1);
// console.log(10+20/5*4-1);

// assignment =
// comparision ==
// strictly comparision ===

// console.log(10==10);
// console.log(10=='10');
// console.log(10==='10');
// console.log(10===10);
// console.log(10=='ten');

// console.log(0.1+0.2==0.3);
// 0.1+0.2 = 0.3000000000004
// console.log(0.2+0.2==0.4);
// console.log(0.1+0.3==0.4);

// console.log(typeof "Skill");
// console.log(typeof 10);
// console.log(typeof 10.1); //exception
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof NaN); //exception
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof 100n);
// console.log(typeof function(){});
// console.log(typeof Symbol('A'));


// 16/11/2022

// console.log("0"==false);
// console.log(false=="0");

// console.log(false==="0");
// var a=1,b=2
// console.log(a++b);
// console.log(a + + b); //a + (+b)

// var a=2,b=2,c;
// //console.log(a++);
// // console.log(++a);
// c = --a && b++;
// console.log(a," - ",b," - ",c)


// XOR -> exclusive OR ^

// console.log(1^1); //0
// console.log(1^0); //1
// console.log(0^1); //1
// console.log(0^0); //0

// console.log(1^0^1); //1
// console.log(0^1^0); //1

// var a=10,b=30;
// var str1 = "hello welcome"+a + " to skillqode"+" str1";
// var str2 = 'hello welcome to skillqode'+' str2';
// var str3 = `hello welcome ${a}
//  to skillqode${" str3"}` ; //backtick ES6 - template literal

// console.log(str1);
// console.log(str2);
// console.log(str3);

// variable 

// declare variable using -> 
// var let const
 
// const a=10; 
// a=20;
// console.log(a);

// let a=10;
// console.log(a + '10');
// console.log(typeof(a + '10'));

// console.log(a + true);
// console.log(typeof(a + true));

// let a=10;
// let b="10 " + "a"
// console.log(b);

// undefined null NaN

// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(null == null);
// console.log(null === null);

// 17/11/2022

// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);

// console.log(10*"s"); //NaN

// console.log(); //NaN

// undefined   NaN     null


// console.log(null == 0)
// console.log(undefined == 0)
// console.log(NaN == 0)

// undefined   NaN     nulls
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(undefined == NaN);

// console.log(NaN == null);
// console.log(NaN === null);

/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/



// var a=10;
// console.log(a);
// var a=20
// console.log(a);

// let a=10;
// console.log(a);
// let a=20
// console.log(a);

// let a=10;
// {
//     let a=100;        
// }
// console.log(a);


//let findSimpleInterest; //camel case

