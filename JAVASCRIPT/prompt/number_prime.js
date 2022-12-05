// 7. Write a python function that accepts a number as a parameter 
//    and check the number is prime or not. 

function test_prime(n)
{

  if (n===1)
  {
      return console.log(`${n} is NOT a prime number`);
  }
  else if(n === 2)
  {
      return console.log(`${n} is a prime number`);
  }
  else
  {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return console.log(`${n} is NOT a prime number`);
        }
      }
      return console.log(`${n} is a prime number`);
  }
}

test_prime(1);
test_prime(2);
test_prime(6);
test_prime(16);
test_prime(13);
test_prime(11);
