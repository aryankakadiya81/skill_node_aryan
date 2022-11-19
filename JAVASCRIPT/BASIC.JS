// 14-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("programme 1");
// console.log("hello");

// =================================================

// console.log("programme 2");
// var 
// b = 90, 
// c = 100, 
// d = 999;
// if(b > c && b > d)
// {
//     console.log("\n b = ",b,"is greater than c and d");
// }
// else if(c > d)
// {
//     console.log("\n c = ",c,"is greater than b,d");
// }
// else
// {
//     console.log("\n d = ",d,"is greater than b,c");
// }

// =================================================

// console.log("programme 3");
// var a = 11;
// console.log("ARYAN",a);
// if(a % 2 == 0)
// {
//     console.log("\n even number");
// }
// else if(a % 2 != 0)
// {
//     console.log("\n odd number");
// }

// =================================================

// console.log("programme 4");
// var a,b,c;
// for(a=1 ; a<5 ; a++)
// {
//     console.log("\n aryan");
// }

// =================================================

// console.log("programme 5");
// var a,b,c;
// for(a=1 ; a<5 ; a++)
// {
//     for(b=1 ; b<5 ; b++)
//     {
//         console.log(a);
//     }
// }

// =================================================

// console.log("programme 6");
// var a;
// for(a=1 ; a<5 ; a++)
// {
//     console.log(a);
// }

// =================================================

// console.log("programme 7");
// var a=1;

// while(a <= 5)
// {
//     console.log(a);
//     a++;
// }

// =================================================

// console.log("programme 8");
// var i = 1,j = 1;
// do
// {
//      console.log(i);
//      i++;
// }
// while(i <= 5);

// =================================================

//  console.log("programme 9");
//  var i = 1;
//  do
//  {
//      i++;
//      var j = 1;
//      do
//      {
//          j++;
//          console.log(i);
//      }
//      while(j <= i);  
//  }
//  while(i <= 5);

// =================================================

// console.log("programme 10");

// var a,b;
// for(a=1 ; a<5 ; a++)
// {
//     for(b=1 ; b<a ; b++)
//     {
//         console.log(a);
//     }
// }

// =================================================

// console.log("programme 11");
// var a=1;
// while(a <= 5)
// {
//     a++;
//     var b=1;
//     while(b <= a)
//     {
//         console.log(a);
//         b++;
//     }
// }

// 15-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// operators

// console.log(10+20);
// console.log(10+"20");
// console.log(10+'20');
// console.log(10 + +'20');
// console.log(10+ +'20');

// console.log(10+ +'20' + 20);
// console.log(10 * '20');
// console.log(10 * 20);
// console.log(10 / '20');
// console.log(10 / 20);

// console.log(true+false);
// console.log(true+true);
// console.log(true+1);
// console.log(true+10+20/5*false);
// console.log(true/false);
// console.log(20*5/false);
// console.log(10+20/5*4-false);
// console.log(10+20/5*4-1);
// console.log(10+20/5*4-true);

// assignment operator =
// comparision == (check only data)
// strictly comparision === (check data and datatype both)

// console.log(10==10);
// console.log(10=='10');
// console.log(10==='10');
// console.log(10===10);
// console.log(10=='ten');

// console.log(0.1+0.2);
// console.log(0.1+0.2 == 0.3);
// console.log(0.2+0.2 == 0.4);
// console.log(0.2+0.2);
// console.log(0.1+0.3 == 0.4);

// console.log(typeof "skill");
// console.log(typeof 10);
// console.log(typeof 10.1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof 100n);
// console.log(typeof function(){});
// console.log(typeof Symbol('A'));

// 16-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// operator(and,or,xor, + + ),string,variable(var,let,const),undefined,null,NaN

// console.log("0" == false);//true
// console.log(false == "0");//true
// console.log(false === "0");//false

// var a=1,b=2;
// // console.log(a ++ b);//error
// console.log(a + + b);// a + + b = a+(+ b) = a+b = 1+2 = 3

// 'and' & 'or' operators
// var a=2,b=3,c;
// console.log(a++);//2
// console.log(a++);//3
// console.log(++a);//5
// c = --a && b++; // if first condition value is 1 after it is continue
// c = --a || b++; // if first condition value is 0 after it is continue
// console.log(a,"-",b,"-",c);

// xor(^) operator-> exclusive or ^ 
// console.log(1^1);//0
// console.log(1^0);//1
// console.log(0^1);//1
// console.log(0^0);//0

// console.log(1^0^1);//0
// console.log(0^1^0);//1
// console.log(0^0^0);//0
// console.log(1^1^1);//1

// string
// var a=10,b=20;
// var str1 = " hello " + a + " aryan " + b +" str-1";
// var str2 = ' hello ' + b + ' aryan ' + a +' str-2 ';
// var str3 = `hello ${a} aryan ${b}  ${"str-3"}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// variable
// there are three types of variable declaration > var
//                                               > let
//                                               > const
// var...........
// var a = 10;
// console.log(a);//10

// console.log(a);//undefined
// var a=10;

// var a;
// console.log(a);//undefined

// let.................
// let a = 10;
// console.log(a);//10

// console.log(a);//error :-> Cannot access 'a' before initialization
// let a=10;

// let a;
// console.log(a);//undefined

// let a=10;
// console.log(a + '10');//1010
// console.log(typeof (a + '10'));//string
// console.log(a + true);//11
// console.log(typeof(a + true));//number

// let a=10;
// let b="10"+"a";
// console.log(b);//10a

// const.................

// const a=10;
// a=20;
// console.log(a);//error :-> Assignment to constant variable

// const a=10;
// a=a+10;
// console.log(a);//error :-> Assignment to constant variable

// const a=10;
// a+=10;
// console.log(a);//error :-> Assignment to constant variable

// console.log(a);//error :-> Cannot access 'a' before initialization
// const a=10;

// console.log(a);
// const a;//value is mandatory for const variable declaration

// undefined, null, NaN

// console.log(undefined == undefined);//true
// console.log(undefined === undefined);//true
// console.log(null == null);//true
// console.log(null === null);//true
// console.log(NaN == NaN);//false everytime NaN give diffrent value
// console.log(NaN === NaN);//false everytime NaN give diffrent value

// console.log(null == undefined);//true
// console.log(null === undefined);//false
// console.log(null === NaN);//false
// console.log(null == NaN);//false

// 17/11/2022+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// undefined,NaN,null,let,var

// console.log(typeof 0);//number         
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
// console.log(typeof NaN);//number

// console.log(10*"s"); //NaN

// console.log("s"*10); //NaN

// undefined   NaN     null

// console.log(0 == 0)//true
// console.log(null == 0)//false
// console.log(undefined == 0)//false
// console.log(NaN == 0)//false

//  console.log(0 === 0)//true
// console.log(null === 0)//false
// console.log(undefined === 0)//false
// console.log(NaN === 0)//false

// undefined   NaN     nulls
//  console.log(undefined == null);//true
//  console.log(undefined === null);//false
//  console.log(undefined == NaN);//false

//  console.log(NaN == null);//false
//  console.log(NaN === null);//false

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
// console.log(a);//10
// var a=20
// console.log(a);//20

// let a=10;
// console.log(a);//error :-> Cannot redeclare block-scoped variable 'a'
// let a=20
// console.log(a);//error :-> Cannot redeclare block-scoped variable 'a'


// let a=10;
// {
//     let a=100;        
//     console.log(a);//100
// }
// console.log(a);//10

// let a=10;
// {
//     let a=100;        
// }
// console.log(a);//10

// let a=10;
// {
//     let a=100;        
//     console.log(a);//100
// }

// let findSimpleInterest;//camel case

// 19/11/2022+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array

// let arr=[10,11,12,13,14,15,16,17];                                
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// console.log(arr[3.1]);

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// console.log(arr);
// The length property of an Array object represents the number of elements in that array
// console.log(arr.length);
// arr.length = 10;
// console.log(arr);
// console.log(arr.length);
// arr[9]=undefined;
// arr[5]=undefined;
// arr[5]=20;
// arr[3.1]=3.1;
// arr["A"]="a";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// arr.length=100;
// console.log(arr);
// arr[50]=50;
// console.log(arr.length);
// arr['50']="fifty";
// console.log(arr.length);


// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]
// console.log(arr1);

// console.log(arr_new[-2])
// arr_new.push(18);
// arr_new.pop();
// arr_new.pop();
// arr_new.pop();
// console.log(arr_new)
// arr_new.shift();
// arr_new.shift();
// arr_new.shift();
// arr_new.unshift(9);
// console.log(arr_new)
// console.log(arr_new)
// console.log(arr_new)
// arr_new.splice(5);
// arr_new.splice(5,1);
// arr_new.splice(-4,2);
// arr_new.splice(-4,-2);
// arr_new.splice(4,-2);
// arr_new.splice(-3);
// arr_new.splice(0,2,30,31);
// arr_new.splice(0,2,30,31,32,33);
// arr_new.splice(0,arr_new.length,30,31,32,33);
// arr_new.splice(0,0,30,31,32,33);
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);
// arr_new.splice(5,0,30,31,32,33);


// console.log(arr_new.splice(2));

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3,3));
// console.log(arr_new.splice(3,100,21,22,23));











