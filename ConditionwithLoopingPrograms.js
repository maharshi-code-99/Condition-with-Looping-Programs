// Condition with Looping Programs

// ================= CONDITIONAL TASKS =================

// Even or Odd
function evenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

// Largest of Three
function largest(a, b, c) {
  return Math.max(a, b, c);
}

// Grade
function grade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  return "Fail";
}

// Leap Year
function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Voting Eligibility
function voting(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}

// Calculator (Switch)
function calculator(a, b, op) {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Divide by zero";
    default: return "Invalid";
  }
}

// Positive, Negative, Zero
function posNegZero(n) {
  return n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
}

// Divisible by 3 and 5
function divisible3and5(n) {
  return n % 3 === 0 && n % 5 === 0;
}


// ================= LOOPING TASKS =================

// Print 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// Sum of N
function sumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// Multiplication Table
function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// Factorial
function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

// Reverse Number
function reverseNum(n) {
  return Number(n.toString().split('').reverse().join(''));
}

// Count Digits
function countDigits(n) {
  return n.toString().length;
}

// Palindrome Number
function palindromeNum(n) {
  return n === reverseNum(n);
}

// Fibonacci Series
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

// Sum of Digits
function sumDigits(n) {
  return n.toString().split('').reduce((a, b) => a + Number(b), 0);
}

// Prime Check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Armstrong Number
function armstrong(n) {
  let digits = n.toString().split('');
  let sum = digits.reduce((a, b) => a + Math.pow(Number(b), digits.length), 0);
  return sum === n;
}

// Star Pattern
function starPattern(n) {
  for (let i = 1; i <= n; i++) console.log('* '.repeat(i));
}

// Number Pattern
function numberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) row += j + ' ';
    console.log(row);
  }
}

// Print Odd Numbers
function printOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}

// Stop Loop Condition
function stopLoop(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 5) break;
    console.log(i);
  }
}


// ================= FUNCTIONS =================

function sum(a, b) { return a + b; }
function evenOddFunc(n) { return n % 2 === 0 ? "Even" : "Odd"; }
function largestFunc(a, b, c) { return Math.max(a, b, c); }
function factorialFunc(n) { return factorial(n); }
function reverseString(str) { return str.split('').reverse().join(''); }
function palindromeStr(str) { return str === reverseString(str); }
function countVowels(str) { return (str.match(/[aeiou]/gi) || []).length; }
function sumArray(arr) { return arr.reduce((a, b) => a + b, 0); }
function primeFunc(n) { return isPrime(n); }
function fibFunc(n) { return fibonacci(n); }
function removeDuplicates(arr) { return [...new Set(arr)]; }
function secondLargest(arr) { return [...new Set(arr)].sort((a, b) => b - a)[1]; }
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function missingNumber(arr, n) { return (n * (n + 1)) / 2 - arr.reduce((a, b) => a + b, 0); }
function flatten(arr) { return arr.flat(Infinity); }


// ================= PATTERNS =================

// Right Triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) console.log('* '.repeat(i));
}

// Inverted Triangle
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) console.log('* '.repeat(i));
}

// Right-Aligned Triangle
function rightAligned(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '* '.repeat(i));
  }
}

// Pyramid
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}

// Diamond
function diamond(n) {
  pyramid(n);
  for (let i = n - 1; i >= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}

// Hollow Square
function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += (i === 1 || i === n || j === 1 || j === n) ? '* ' : '  ';
    }
    console.log(row);
  }
}

// Number Triangle
function numberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) row += j + ' ';
    console.log(row);
  }
}

// Floyd's Triangle
function floyd(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) row += num++ + ' ';
    console.log(row);
  }
}

// Pascal's Triangle
function pascal(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    let val = 1;
    for (let j = 0; j <= i; j++) {
      row += val + ' ';
      val = val * (i - j) / (j + 1);
    }
    console.log(row);
  }
}
