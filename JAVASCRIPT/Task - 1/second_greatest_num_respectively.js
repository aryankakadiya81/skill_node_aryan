// 8. Write a python function which will take an array of numbers 
//    stored and find the second lowest and second greatest numbers, 
//    respectively. 


// function SGL(arr_num)
// {
//     arr_num.sort(function(x,y)
//     {
//         return x-y;
//     });
//     var uniqa = [arr_num[0]];
//     var result = [];
  
//     for(var j=1; j < arr_num.length; j++)
//     {
//         if(arr_num[j-1] !== arr_num[j])
//         {
//             uniqa.push(arr_num[j]);
//         }
//     }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//     return result.join(',');
// }
// console.log(SGL([1,2,3,4,5]));
