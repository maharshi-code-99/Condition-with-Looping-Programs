// ==========================
// 🔹 CONDITIONAL TASKS
// ==========================

// 1. Check Even or Odd
let num1 = 7;

if (num1 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// 2. Largest among three numbers
let a = 10, b = 25, c = 15;

if (a >= b && a >= c) {
    console.log("Largest is:", a);
} else if (b >= a && b >= c) {
    console.log("Largest is:", b);
} else {
    console.log("Largest is:", c);
}


// 3. Grade based on marks
let marks = 78;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 4. Leap year check
let year = 2024;

// Leap year logic:
// divisible by 4 AND not by 100 OR divisible by 400
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 5. Voting eligibility
let age = 19;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// 6. Arithmetic operations using switch
let x = 10, y = 5;
let operator = "+";  // change to -, *, /

switch (operator) {
    case "+":
        console.log("Addition:", x + y);
        break;
    case "-":
        console.log("Subtraction:", x - y);
        break;
    case "*":
        console.log("Multiplication:", x * y);
        break;
    case "/":
        if (y !== 0) {
            console.log("Division:", x / y);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}


// 7. Positive, Negative or Zero
let num2 = -5;

if (num2 > 0) {
    console.log("Positive");
} else if (num2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 8. Divisible by both 3 and 5
let num3 = 15;

if (num3 % 3 === 0 && num3 % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both");
}



// ==========================
// 🔹 LOOPING TASKS
// ==========================

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Sum of first N natural numbers
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("Sum =", sum);


// 3. Multiplication table
let tableNum = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// 4. Factorial
let factNum = 5;
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
    factorial = factorial * i;
}
console.log("Factorial =", factorial);


// 5. Reverse a number
let original = 1234;
let reverse = 0;

while (original > 0) {
    let digit = original % 10;        // get last digit
    reverse = reverse * 10 + digit;   // build reverse number
    original = (original - digit) / 10; // remove last digit
}
console.log("Reversed =", reverse);


// 6. Count digits
let countNum = 12345;
let count = 0;

while (countNum > 0) {
    count = count + 1;
    countNum = (countNum - (countNum % 10)) / 10;
}
console.log("Digits =", count);


// 7. Palindrome check
let palNum = 121;
let temp = palNum;
let rev = 0;

while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = (temp - digit) / 10;
}

if (rev === palNum) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// 8. Fibonacci series up to N terms
let terms = 7;
let first = 0, second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= terms; i++) {
    let next = first + second;
    console.log(next);
    first = second;
    second = next;
}


// 9. Sum of digits
let digitNum = 1234;
let digitSum = 0;

while (digitNum > 0) {
    let digit = digitNum % 10;
    digitSum = digitSum + digit;
    digitNum = (digitNum - digit) / 10;
}
console.log("Sum of digits =", digitSum);
