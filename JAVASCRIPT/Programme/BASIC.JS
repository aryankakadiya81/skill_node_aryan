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

// Array,push,pop,shift,unshift,splice

// let arr=[10,11,12,13,14,15,16,17];                                
// console.log(typeof arr);//object
// console.log(arr);//[10,11,12,13,14,15,16,17]
// console.log(arr[0]);//10
// console.log(arr[5]);//15
// console.log(arr["10"]);//undefined
// console.log(arr[3.1]);//undefined

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// console.log(arr);//["ten",11,"twelve",13,14,"15",16,"17"]
// The length property of an Array object represents the number of elements in that array
// console.log(arr.length);//8
// arr.length = 10;
// console.log(arr);//[ 'ten', 11, 'twelve', 13, 14, '15', 16, '17', <2 empty items> ]
// console.log(arr.length);//10
// arr[9]=undefined;
// arr[5]=undefined;
// arr[5]=20;
// arr[3.1]=3.1;
// arr["A"]="a";
// console.log(arr);//['ten' ,11,'twelve',13,14,20,16,'17',<1 empty item>, undefined,'3.1': 3.1,A: 'a']
// console.log(arr.length);//10
// console.log(arr[9]);//undefined
// console.log(arr[9]);//undefined

// let arr=["ten",11,"twelve",13,14,"15",16,"17"];                                
// arr.length=100;
// console.log(arr);//[ 'ten', 11, 'twelve', 13, 14, '15', 16, '17', <92 empty items> ]
// arr[50]=50;
// console.log(arr.length);//100
// arr['50']="fifty";
// console.log(arr);//['ten',11,'twelve',13,14,'15',16,'17',<42 empty items>,'fifty',<49 empty items>]
// console.log(arr.length);//100


// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]// error :->  ',' expected.
// console.log(arr1);//{ A: 'a', B: 'b' }
// console.log(arr1.A)//a
// console.log(arr1.B)//b

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new[-2]);//undefined

// push(last insert)
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.push(28);
// console.log(arr_new)//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 28 ]

// pop(last delete)
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arr_new.pop();
// console.log(arr_new)//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
// arr_new.pop();
// console.log(arr_new)//[ 10, 11, 12, 13, 14, 15, 16, 17, 18 ]

// shift(first delete)
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.shift();
// console.log(arr_new)//[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.shift();
// console.log(arr_new)//[ 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.shift();
// console.log(arr_new)//[ 13, 14, 15, 16, 17, 18, 19, 20 ]

// unshift(first add)
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.unshift(9);
// console.log(arr_new);//[ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.unshift(1,2,3,4,5,6,7,8);
// console.log(arr_new);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// splice(start, deleteCount) <- syntax_of splice

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(5);//delete element 5th(15 as per array position) to all
// console.log(arr_new);//[ 10, 11, 12, 13, 14 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(5,1);//delete element 5th(15 as per array position) only one
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(-4,2);//delete element last 4th(17 as per negative position) to 2 
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 19, 20]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(-4,-2);//same output of arr_new because delete count naver in nagative number 
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(4,-2);//same output of arr_new because delete count naver in nagative number
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(-3);//delete element last 3rd(18 as per negative position) to all
// console.log(arr_new);

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(0,2,30,31);//delete element 0(10 as per negative position) to 2 and add at first two element 30,31
// console.log(arr_new);//[ 30, 31, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(0,2,30,31,32,33);////delete element 0(10 as per negative position) to 2 and add at first four element 30,31,32,33
// console.log(arr_new);//[ 30, 31, 32, 33, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.length);//11
// arr_new.splice(0,arr_new.length,30,31,32,33);//delete all element and add four new element at first 30,31,32,33
// console.log(arr_new);//[ 30, 31, 32, 33 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(0,0,30,31,32,33);
// console.log(arr_new);//[ 30, 31, 32, 33, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(5,30,31,32,33);//add element at 5th position
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 31, 32, 33]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(0,5,30,31,32,33);
// console.log(arr_new);//[ 30, 31, 32, 33, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// arr_new.splice(5,0,30,31,32,33);//add element from 5th position 
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 30, 31, 32, 33, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];   
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.splice(2));//[ 12, 13, 14, 15, 16, 17, 18, 19, 20 ]//after_splice_output

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.splice(3));//[ 13, 14, 15, 16, 17, 18, 19, 20 ]

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.splice(3,3));//[ 13, 14, 15 ]//deleted element

// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr_new);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.splice(3,100,21,22,23));//[ 13, 14, 15, 16, 17, 18, 19, 20 ]//deleted element
// console.log(arr_new);//[ 10, 11, 12, 21, 22, 23 ]//after splice function apply

// 21-11-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice,at,join

// slice()
// let arr_new = [10,11,12,13,14,15,16,17,18,19,20];                                
// let a = arr_new.slice(2);
// console.log(a);// [ 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.slice(3)); //[ 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.slice(3,12)); //[ 13, 14, 15, 16, 17, 18, 19, 20 ]
// console.log(arr_new.slice(-3,2)); //[]
// console.log(arr_new.slice(-3,-5));//[]
// console.log(arr_new.slice(-5,-3));//[ 16, 17 ]
// let new_arr = arr_new.slice();
// console.log(new_arr);//[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// at()
// let arr_new=[10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.at(4)); //14
// console.log(arr_new.at(-2)); //19
// console.log(arr_new.at(-4)); //17

// join()
// let arr_new = [10,11,12,13,14,15,16,17,18,19,20];                                
// console.log(arr_new.join()); //10,11,12,13,14,15,16,17,18,19,20
// console.log(arr_new.join("")); //1011121314151617181920
// console.log(arr_new.join("-")); //10-11-12-13-14-15-16-17-18-19-20
// console.log(typeof arr_new.join()); //string


// 22-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION

// 1...............................................................
// function f_1(a1,a2,a3)
// {
//     console.log(a1,a2,a3);
// }
// f_1("aryan","utsav","sankalp"); //aryan utsav sankalp
// f_1("react","node"); // react node undefined
// f_1("kalrav"); // kalrav undefined undefined
// f_1(); //undefined undefined undefined
// f_1(undefined ,undefined ,undefined);//undefined undefined undefined
// f_1(undefined,"sankalp"); //undefined sankalp undefined
// f_1(null,null,null); //null null null
// f_1(null,"  ",null); //null    null
// f_1(null,undefined,null); //null undefined null
// f_1(null, {}, []); //null {} []

// 2...............................................................

// function fun_0()
// {
//     console.log("inside fun_0()");
//     return "hello";
// }
// function fun_1()
// {
//     console.log("inside fun_1()");
//     return fun_0();
// }
// function fun_2()
// {
//     console.log("inside fun_2()");
//     return fun_1();
// }

// console.log(fun_2);//[Function: fun_2]
// console.log(fun_2());//inside fun_2()
//                         // inside fun_1()
//                         // inside fun_0()
//                         // hello


// 3...............................................................

// function F_1()
// {
//     return "hello";
// }
// function F_2()
// {
//     return F_1;
// }
// console.log(F_2());//[Function: F_1]
// console.log(F_2()());//hello

// 4.......................................................

// function fun_one(arg1, arg2, arg3) 
// {
//     // console.log(arg1(), arg2(), arg3());
//     console.log(arg1, arg2, arg3);
// }
// function fun_two() {
//       return "Hello_1";
// }
// function fun_three() {
//       return "Hello_2";
// }
// function fun_four() {
//       return "Hello_3";
// }
// // fun_one(fun_two, fun_three, fun_four); //Hello_1 Hello_2 Hello_3
//  fun_one(fun_two(), fun_three(), fun_four()); ////Hello_1 Hello_2 Hello_3


// 23-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// anonymous

// Function => anonymous
// console.log(() => {}) //[Function (anonymous)]

// let fun_1 = () =>{
//     return "hello";
// }
// console.log(fun_1()) //hello

// single line function
// let fun_1 = (str) => `world ${str}` // single line function
// let string = "hello";
// console.log(fun_1(string)) //world hello 

// function chaining
// let fun_1 = () =>{
//     return () =>{
//         return () =>{
//             return `hello`;
//         };
//     };
// };
// console.log(fun_1); //[Function: fun_1]
// console.log(fun_1()); //[Function (anonymous)]
// console.log(fun_1()()); //[Function (anonymous)]
// console.log(fun_1()()()); //hello // function chaining

// single line function
// let fun_1 = () => `welcome to arrow function`;
// console.log(fun_1); //[Function: fun_1]
// console.log(fun_1()); //welcome to arrow function

// let fun_1 = () => "ARYAN";
// console.log(fun_1());// ARYAN

// multiple arguments
// let fun_1 = (arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3);
// }

// fun_1(1,2,3);// 1 2 3
// fun_1(123,`aryan`);// 123 aryan undefined
// fun_1(`aryan`);// aryan undefined undefined
// fun_1();// undefined undefined undefined
// fun_1(`aryan` == `aryan`);// true undefined undefined
// fun_1(`aryan` === `aryan`, 5 === 3);// true false undefined

// wrong 
// let fun_1,fun_2;
// fun_1 (()=>{return "Hello_1"},
//             fun_2,
//             ()=>"Hello_3"
//             );
//  fun_1(()=>"Hello_1", ()=>"Hello_2", ()=>"Hello_3");

// 24-11-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array ...................................
// (...)spread operator

// let arr1 = [10,20,30];
// let arr2 = [100,200,300];
// let copy_array;

// copy_array = [...arr1,arr2];// (...)spread operator
// console.log(copy_array);// [ 10, 20, 30, [ 100, 200, 300 ] ]

// copy_array = [...arr1,...arr2];// (...)spread operator
// console.log(copy_array);// [ 10, 20, 30, 100, 200, 300 ]

// copy_array = arr1;
// console.log(copy_array);// [ 10, 20, 30 ]

// copy_array = arr1.slice(0);
// console.log(copy_array);// [ 10, 20, 30 ]

// copy_array = arr1;
// arr1.push(40);
// copy_array.push(50);
// console.log(copy_array);// [ 10, 20, 30, 40, 50 ]
// console.log(arr1);// [ 10, 20, 30, 40, 50 ]

// copy_array = arr1;
// console.log(arr1 == copy_array);// true
// copy_array = arr1.slice(0);
// console.log(arr1 == copy_array);// false

// function...................................

// default parameters
// function f_1(arg1 = "Hello_1", arg2 = "Hello_2", arg3 = "Hello_3")
// {
//     console.log(arg1, arg2, arg3);
// }
// f_1();// Hello_1 Hello_2 Hello_3
// f_1(1234,"aryan");// 1234 aryan Hello_3
// f_1("aryan",);//aryan Hello_2 Hello_3

// f_1(undefined,undefined,undefined);// Hello_1 Hello_2 Hello_3
// f_1(null,null,null);// null null null
// f_1(undefined,undefined,"aryan");// Hello_1 Hello_2 aryan
// f_1(`w1`,`w2`,`w3`,`w4`);// w1 w2 w3
// f_1(undefined,undefined);// Hello_1 Hello_2 Hello_3
// f_1(null,null);// null null Hello_3

// (...)spread operator in function
// function f_1(arg1,...arg2)
// {
//     console.log(arg1);
//     console.log(arg2);
// }
// f_1();// undefined
//       // []

// f_1("hello 1");// hello 1
//                // []

// f_1("h1","h2","h3");// h1
//                     // [ 'h2', 'h3' ]

// f_1(undefined,undefined);// undefined
//                          // [ undefined ]

// f_1(undefined,null);// undefined
//                     // [ null ]

// f_1(null,null);// null
//                // [ null ]

// function f_1(...arg1,...arg2)
// {};// syntax error -> A rest parameter must be last in a parameter list.


// 25-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// array functions,string functions,math function from mdn wabsite



// 26-11-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The for loop:
// for (let index=0; index < someArray.length; index++) 
// {
//   const elem = someArray[index];
// }

// The for-in loop:
// for (const key in someArray) 
// {
//   console.log(key);
// }

// The Array method .forEach():
// someArray.forEach((elem, index) => {
//   console.log(elem, index);
// });

// The for-of loop:
// for (const elem of someArray) {
//   console.log(elem);
// }

// Example

// const arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i in arr) {
//   console.log(arr[i]);
// }

// With the other two constructs, forEach() and for/of, you get access to the array element itself. With forEach() you can access the array index i, with for/of you cannot.

// arr.forEach(() => {});

// arr.forEach((v, i, a) => console.log(${i} - ${v} - ${a}));

// for (let v of arr) {
//   console.log(v);
// }

// arr.test = "bad";

// console.log(arr);
// [ 'a', 'b', 'c', 'd', 'e', test: 'bad' ]

// Prints "a, b, c, bad"

// for (let i in arr) {
//   console.log(i + " - " + arr[i]);
// }

// arr.forEach((v, i, a) => console.log(${i} - ${v} - ${a}));

// 29-11-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
// };

// let order = (fruit,call_production) =>{
//     console.log(`${stocks.Fruits[fruit]} selected and Order placed. Please call production`)
//     call_production;
// };
    
// let production = () =>{
//     console.log("Production has started")
//     setTimeout(()=>{
//         console.log(`The ${stocks.Fruits[0]} has been chopped`)
//         setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//             setTimeout(()=>{
//                 console.log("start the machine")
//                 setTimeout(()=>{
//                     console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                     setTimeout(()=>{
//                         console.log(`${stocks.toppings[0]} as toppings`)  
//                         setTimeout(()=>{
//                             console.log("serve Ice cream")        
//                         },1000)  
//                     },1000)    
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// };

// order(0,production());


// 02-12-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let is_shop_open = true;

// let order = ( time, work ) => 
// {
//     return new Promise( ( resolve, reject )=>
//     {  
//       if( is_shop_open )
//       {
//         setTimeout(()=>
//         {           
//           resolve(work())    
//         }, time)  
//       }  
//       else
//       {  
//         reject( console.log("Our shop is closed") )  
//       }  
//     })
// }

// // console.log(  order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`)))
//   order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
//   .then(()=>{
//     return order(0000,()=>console.log('production has started'))
//   })
  
//   .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
//   })
//   .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//   })
//   .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
//   })
//   .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
//   })
//   .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
//   }) 
//   .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
//   })
//   .catch(()=>{
//     console.log("Customer left")
//   })

// 03/12/2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function add(num,callback)
// {
//     return callback(num + 10, false)
// }
// function sub(num,callback)
// {
//     return callback(num - 5, false)
// }
// function mul(num,callback)
// {
//     return callback(num * 2, false)
// }
// function div(num,callback)
// {
//     return callback(num / 3, false)
// }
// add(10,(addres,error) => {
//     if(!error)
//     {
//         console.log(addres);
//         sub(addres,(subres,error) => {
//             if(!error)
//             {
//                 console.log(subres);
//                 mul(subres,(mulres,error) => {
//                     if(!error)
//                     {
//                         console.log(mulres);
//                         div(mulres,(divres,error) => {
//                             if(!error)
//                             {
//                                 console.log(divres);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// function add(num,callback) 
// {
//     return callback(num + 10,false)
// }
// add(10,(addres,error) => 
// {
//     if(!error)
//     {   
//         console.log(addres)
//     }
// })

// 05-12-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    promises are "special" javascript objects
    promises are solution for "callback hell"
    "producer" will create the "promises"
    "consumer" will consume the "promises"
    "Promise" is the class, used to create the "promises"
    we can consume Promises in 2 ways
    1) then()
    2) async & await keywords
*/
// ------------------------------------------------------------------------
   
// promise1.then -----------------------------------------    
// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("promises");
// });

// console.log(typeof (promise1)) //Object 
// promise1.then((posRes)=>{
//     console.log("resole : "+posRes);
// },(errRes)=>{
//     console.log("reject :"+errRes);
// });


// console.log("Before")
// let promise1 = new Promise((resolve,reject) =>
// {
//     setTimeout(()=>{
//         resolve("Hello");
//     },1000);
// });
// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// console.log("After")    



// let promise1 = new Promise((resolve,reject) =>
// {
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },0);
// });
// let promise2 = new Promise((resolve,reject)=>
// {
//     resolve("Hello_2");
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_3");
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// promise3.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// Promise.all -----------------------------------------
// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_3");
// });

// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);// [ 'Hello_1', 'Hello_2', 'Hello_3' ]
// },(errRes)=>{
//     console.log(errRes);
// });


// Promise.race -----------------------------------------
// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_3");
// });
// Promise.race([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);// //Hello_1
// },(errRes)=>{
//     console.log(errRes);
// });


// Promise.all -----------------------------------------
// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject) =>
// {
//     reject("Error");
// });
// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// Promise.allSettled -----------------------------------------
// let promise1 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject) =>
// {
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject) =>
// {
//     reject("Error");
// });
// Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// -----------------------------------------

// let promise1 = new Promise((resolve,reject)=>{
//     resolve("Hello");
// });
// async function my_fun(){
//     let res = await promise1;
//     console.log(res);
// };
// my_fun();   


// function add(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num+5);
//     })
// };
// function sub(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num-3);
//     })
// };
// function mul(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num*2);
//     })
// };
// function div(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num/2-2);
//     })
// }
// async function consume(){
//     let addRes = await add(5);
//     let subRes = await sub(addRes);
//     let mulRes = await mul(subRes);
//     let divRes = await div(mulRes);
//     console.log(addRes, subRes, mulRes, divRes);
// };
// consume();


// 6/12/2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled)


// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// console.log(
//     [1, 2, 3, 4, 5].filter((element) => {
//         return element >= 3;
//     })
// ); //[ 3, 4, 5 ]

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log( studentGrades); 


// console.log(
//     [1, 2, 3, 4, 5].map((element, index) => {
//         return element * 100;
//     }).filter((element, index) => {
//         return element >= 300;
//     })
// );

// console.log(
//     [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
//         console.log(firstElement +" - " + nextElement)
//         return firstElement + nextElement;
//     },10)
// );

// Currying ---------------------------------------------

// let add = (num1, num2) => {
//     console.log("Addition...", (num1 + num2));
//     return (num1, num2) => {
//         console.log("Subtraction...", (num1 - num2));
//         return (num1, num2) => {
//             console.log("Multiplication....", (num1 * num2));
//             return (num1, num2) => {
//                 console.log("Division....", (num1 / num2));
//             }
//         };
//     };
// };
// add(10, 10)(20, 5)(5, 10)(100, 10);


// let add = (num1,num2)=>{
//     console.log("Addition....",(num1+num2) );
//     return sub;
// };
// let sub = (num1,num2)=>{
//     console.log("Subtraction....",(num1-num2));
//     return mul;
// };
// let mul = (num1,num2)=>{
//     console.log("Multiplication....",(num1*num2));
//     return div;
// };
// let div = (num1,num2)=>{
//     console.log("Division....",(num1/num2));
// };
// add(10, 10)(20, 5)(5, 10)(100, 10);
// console.log("--------------------------------------------")
// add(10,10)(10,10)(10,10)(10,10);

// 07/12/2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// call, apply, bind


// let student = {
//     name : "ARYAN",
//     age : 18,
//     course : "Node JS",
//     getStudentName : function() 
//     {
//         return this;
//     }
// }
// console.log(student.getStudentName());   // {
//                                          //   name: 'ARYAN',
//                                          //   age: 18,
//                                          //   course: 'Node JS',
//                                          //   getStudentName: [Function: getStudentName]
//                                          // }

// ----------------------------------------------
// let student1 = {
//     name : "ARYAN",
//     age : 18,
//     course : "Node JS",
// }
// let student2 = {
//     name : "UTSAV",
//     age : 19,
//     course : "React JS",
// }
// getStudentName = function() 
// {
//     console.log(this.name);
// }
// getStudentName.call(student1); //ARYAN
// getStudentName.call(student2); //UTSAV


// ----------------------------------------------
let student1 = {
    name : "ARYAN",
    age : 18,
    course : "Node JS",
}
let student2 = {
    name : "UTSAV",
    age : 19,
    course : "React JS",
}
getStudentName = function(city,state,country) 
{
    console.log(`${this.name} - ${city} - ${state} - ${country}`);
}
// getStudentName.call(student1,"Surat","Guj","Ind"); // ARYAN - Surat - Guj - Ind
// getStudentName.call(student1,"Surat","Guj"); // ARYAN - Surat - Guj - undefined


// getStudentName.apply(student1,["Surat","Guj","Ind"]); // ARYAN - Surat - Guj - Ind
// getStudentName.apply(student1,["Surat","Guj"]); // ARYAN - Surat - Guj - undefined
 
   
// getStudentName = function() 
// {
//     console.log(`${this.name}`);
// }

// let USE = getStudentName.bind(student1);
// USE() //ARYAN



// getStudentName = function(city,state,country) 
// {
//     console.log(`${this.name} - ${city} - ${state} - ${country}`);
// }
// let USE = getStudentName.bind(student1,"Surat","Guj","Ind");

// USE() // ARYAN - Surat - Guj - Ind
