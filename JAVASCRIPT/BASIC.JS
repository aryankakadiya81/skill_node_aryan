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





