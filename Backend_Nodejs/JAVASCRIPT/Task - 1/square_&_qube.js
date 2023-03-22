// 6. Write a JS function that input a number and return square & qube of number in aray. 

function fifa(arr) {

    ret= [];

    for (var i = 0, len = arr.length; i < len; i++) 
    {
        ret.push(arr[i] * arr[i]);
    }

    return ret;     
}

console.log(fifa([1,2,3,4,5]))