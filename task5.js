// # JavaScript Questions and Answers

// ## Variables and Data Types

// ### Q1. What is the difference between var, let, and const?

// var can be redeclared and reassigned.

// let can be reassigned but cannot be redeclared in the same scope.

// const cannot be reassigned or redeclared.

// ### Q2. Can you re-declare a variable with var? What about let and const?

// Yes, var can be redeclared.

// ```javascript
// var x = 10;
// var x = 20;
// ```

// let and const cannot be redeclared in the same scope.

// ### Q3. What is the output?

// ```javascript
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);
// ```

// Output:

// ```text
// TypeError
// ```

// The error occurs because a const variable cannot be reassigned. The console.log statement is not executed.

// ### Q4. What is the difference between declaring and initializing a variable?

// Declaration means creating a variable.

// ```javascript
// let x;
// ```

// Initialization means assigning a value to the variable.

// ```javascript
// let x = 10;
// ```

// ### Q5. What will be the output?

// ```javascript
// let a;
// console.log(a);
// ```

// Output:

// ```text
// undefined
// ```

// ### Q6. What is hoisting? Give an example.

// Hoisting is the JavaScript behavior where declarations are processed before the code is executed.

// Example:

// ```javascript
// console.log(x);

// var x = 10;
// ```

// Output:

// ```text
// undefined
// ```

// ### Q7. What is the difference between null and undefined?

// undefined means a variable has been declared but has not been assigned a value.

// null means an empty or intentional absence of a value.

// Example:

// ```javascript
// let a;
// let b = null;
// ```

// ### Q8. What will be the output?

// ```javascript
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});
// ```

// Output:

// ```text
// object
// undefined
// object
// object
// ```

// Note: typeof null returning "object" is a historical JavaScript behavior.

// ---

// ## Operators

// ### Q9. What is the difference between == and ===?

// == compares values after type conversion.

// === compares both value and data type.

// ```javascript
// 5 == "5";    // true
// 5 === "5";   // false
// ```

// ### Q10. What is the difference between ++i and i++?

// ++i increases the value first and then returns it.

// i++ returns the current value first and then increases it.

// Example:

// ```javascript
// let i = 5;
// console.log(++i);  // 6

// let j = 5;
// console.log(j++);  // 5
// ```

// ### Q11. What will be the output?

// ```javascript
// let x = 10;
// let y = "5";

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// ```

// Output:

// ```text
// 105
// 5
// 50
// 2
// ```

// ### Q12. What are logical operators? Explain with examples.

// Logical operators are used to combine or reverse conditions.

// && means AND.

// ```javascript
// 5 > 3 && 10 > 5;  // true
// ```

// || means OR.

// ```javascript
// 5 > 10 || 10 > 5;  // true
// ```

// ! means NOT.

// ```javascript
// !(5 > 3);  // false
// ```

// ### Q13. What will be the output?

// ```javascript
// console.log(5 > 3 && 10 > 5);
// console.log(5 > 10 || 10 > 5);
// console.log(!(5 > 3));
// ```

// Output:

// ```text
// true
// true
// false
// ```

// ### Q14. What is the ternary operator? Give an example.

// The ternary operator is a short way of writing an if-else condition.

// Syntax:

// ```javascript
// condition ? value1 : value2;
// ```

// Example:

// ```javascript
// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);
// ```

// Output:

// ```text
// Adult
// ```

// ---

// ## Type Casting

// ### Q15. What is the difference between implicit and explicit type casting?

// Implicit type casting happens automatically by JavaScript.

// ```javascript
// let result = 10 + "5";
// console.log(result);
// ```

// Output:

// ```text
// 105
// ```

// Explicit type casting is done manually by the programmer.

// ```javascript
// let result = Number("10");
// console.log(result);
// ```

// Output:

// ```text
// 10
// ```

// ### Q16. What will be the output?

// ```javascript
// console.log(Number("123"));
// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// ```

// Output:

// ```text
// 123
// NaN
// 1
// 0
// false
// true
// ```

// ### Q17. What is NaN? Give an example.

// NaN means Not a Number.

// It is returned when a value cannot be converted into a valid number.

// Example:

// ```javascript
// console.log(Number("hello"));
// ```

// Output:

// ```text
// NaN
// ```

// ---

// ## Conditional Statements

// ### Q18. What is the difference between if-else and switch?

// if-else is useful for checking different conditions.

// switch is useful when comparing one value with multiple fixed cases.

// ### Q19. What will be the output?

// ```javascript
// let age = 20;

// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// ```

// Output:

// ```text
// Adult
// ```

// ### Q20. What is nested if? Give an example.

// A nested if is an if statement inside another if statement.

// Example:

// ```javascript
// let age = 25;

// if(age >= 18) {
//     if(age >= 21) {
//         console.log("Eligible");
//     }
// }
// ```

// Output:

// ```text
// Eligible
// ```

// ### Q21. Write a program to check if a number is even or odd using ternary operator.

// ```javascript
// let num = 10;

// let result = num % 2 === 0 ? "Even" : "Odd";

// console.log(result);
// ```

// Output:

// ```text
// Even
// ```

// ---

// ## Loops

// ### Q22. What is the difference between while and do-while?

// while checks the condition before executing the code.

// do-while executes the code once and then checks the condition.

// ### Q23. What will be the output?

// ```javascript
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// ```

// Output:

// ```text
// 1
// 2
// 3
// 4
// 5
// ```

// ### Q24. What is the difference between for-of and for-in?

// for-of is used to get the values from an iterable such as an array.

// for-in is used to get the keys or indexes.

// Example:

// ```javascript
// let arr = ["A", "B"];

// for(let value of arr) {
//     console.log(value);
// }
// ```

// Output:

// ```text
// A
// B
// ```

// ### Q25. Write a program to find sum of numbers from 1 to 100.

// ```javascript
// let sum = 0;

// for(let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log(sum);
// ```

// Output:

// ```text
// 5050
// ```

// ---

// ## Arrays

// ### Q26. What is the difference between slice and splice?

// slice() returns a portion of an array without changing the original array.

// splice() can add or remove elements and changes the original array.

// ### Q27. What will be the output?

// ```javascript
// let arr = [1, 2, 3];

// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();

// console.log(arr);
// ```

// Output:

// ```text
// [1, 2, 3]
// ```

// ---

// ## Functions

// ### Q28. What is the difference between function declaration and function expression?

// Function declaration:

// ```javascript
// function greet() {
//     console.log("Hello");
// }
// ```

// Function expression:

// ```javascript
// let greet = function() {
//     console.log("Hello");
// };
// ```

// Function declarations are hoisted and can be called before they are written.

// Function expressions are not available before the variable is initialized.

// ### Q29. What is an arrow function? Give an example.

// An arrow function is a shorter way to write a function.

// ```javascript
// let add = (a, b) => a + b;

// console.log(add(5, 3));
// ```

// Output:

// ```text
// 8
// ```

// ### Q30. What will be the output?

// ```javascript
// function greet() {
//     return "Hello";
// }

// let message = greet();

// console.log(message);
// ```

// Output:

// ```text
// Hello
// ```
