// 5. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//    Example string : 'the quick brown fox'
//    Expected Output : 'The Quick Brown Fox '

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("she is avneet"));
