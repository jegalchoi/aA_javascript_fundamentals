function madLib(verb, adjective, noun) {
  let arr = [...arguments].map(word => word.toUpperCase());
  
  return `We shall ${arr[0]} the ${arr[1]} ${arr[2]}.`;
}

//console.log(madLib("make", "best", "guac"));

function isSubstring(search, sub) {
  return search.includes(sub);
}

//console.log(isSubstring("time to program", "time"));
//console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(arr) {
  let new_arr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] % 3 == 0 || arr[i] % 5 == 0) && !(arr[i] % 3 == 0 && arr[i] % 5 == 0) ) {
      new_arr.push(arr[i]);
    }
  }

  return new_arr;
}

//console.log(fizzBuzz([3,5,15,20,9]));

function isPrime(n) {
  if (n == 1) {
    return false;
  }
  
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

//console.log(isPrime(2));
//console.log(isPrime(10));
//console.log(isPrime(15485863));
//console.log(isPrime(3548563));

function sum(a, b) {
  return a + b;
}

function sumOfNPrimes(n) {

  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 2;
  }

  let arr = [];

  let i = 2;
  
  while (arr.length < n) {
    if (isPrime(i)) {
      console.log(isPrime(i));
      arr.push(i);
      console.log(arr);
    }
    i += 1;
  }
  
  let result = arr.reduce(sum);
  return result;
}

//console.log(sumOfNPrimes(0));
//console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
