// Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// --------------------------------------------------------------------
// Task 2 — Reverse Number

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// --------------------------------------------------------------------
// Task 3 — Even Numbers

// for(let i = 1; i <= 20; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// --------------------------------------------------------------------
// Task 4 — Odd Numbers

// for(let i = 1; i <= 20; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// --------------------------------------------------------------------
//  Task 5 — Multiplication Table

// let number = prompt("Enter the number:");
// for(let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${i*number}`);
// }

// --------------------------------------------------------------------
// While Loop
// Task 6 — Countdown

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// --------------------------------------------------------------------
// Task 7 — Sum of Numbers

// let sum = 0;
// let i =0;
// while(i<=10){
//     sum+=i;
//     i++;
// }
// console.log(sum)

// ---------------------------------------------------------------------
// Do While
// Task 8 — Print Numbers

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// ---------------------------------------------------------------------
// Task 9 — Do While Understanding
// What is the output?

// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a <= 5);

// because do while loop execute at least one time even though the condition is true or false.
// here, the a value is 10 and enters into the do while and print the value 10 then a is increase to +1 and finally checks the condition 11<=5 is false.

// -----------------------------------------------------------------------
// for of
// Task 10 — String Characters

// let name = "javascript";

// for(c of name){
//     console.log(c);
// }

// ----------------------------------------------------------------------
// Task 11 — Array Values

// let fruits = ["apple","oraane","banana","mango","grapes"];
// for(c of fruits){
//     console.log(c);
// }

// ----------------------------------------------------------------------
// Task 12 — Student Names

// let studentsName = ["Arun","Priya","Kumar","Raj","Abi"];
// for(c of studentsName){
//     console.log(c);
// }

// ---------------------------------------------------------------------
// for in
// Task 13 — Employee Object

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// for(c in employee){
//     console.log(c,employee[c])
// }

// ---------------------------------------------------------------------
// Task 14 — Product Object

// let product = {
//     productName: "YOGA",
//     price: 100000,
//     brand: "Lenovo",
//     category: "Gaming Laptop",
//     stock: 10
// };
// for(i in product){
//     console.log(i,product[i]);
// }

// ---------------------------------------------------------------------
// Functions
// Task 15 — Simple Function

// function welcome(){
//     console.log("Welcome to JavaScript");
// }
// welcome();

// ---------------------------------------------------------------------
// Task 16 — Function With Parameter

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Naveen");
// greet("Arun");
// greet("Priya");

// ---------------------------------------------------------------------
// Task 17 — Multiple Parameters 

// function student(name,age,department){
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Department: ${department}`);
// }
// student("Jeeva",21,"CSE");
// student("Kavin",25,"ECE");
// student("Vinoth",22,"Mech");

// ----------------------------------------------------------------------
// Return
// Task 18 — Addition Function

// function add(a,b){
//     return a+b;
// }
// let result = add(10,20);
// console.log(result);

// ------------------------------------------------------------------------
// Task 19 — Salary

// function salary(amount){
//     return amount;
// }
// let sal = salary(50000);
// console.log(sal);

// ----------------------------------------------------------------------
// Task 20 — Bonus Calculator

// function bonus(salary,bonusAmount){
//     return salary + bonusAmount;
// }
// let total = bonus(50000,5000);
// console.log(total);

// ---------------------------------------------------------------------
// Default Parameter
// Task 21

// function employee(name,role="Developer"){
//     console.log(name," ",role);
// }
// employee("Arun");
// employee("Priya","Designer");

// ---------------------------------------------------------------------
// Task 22 — Named Function

// function square(number){
//     return number*number;
// }
// console.log(square(2));
// console.log(square(3));
// console.log(square(4));
// console.log(square(5));
// console.log(square(6));

// ---------------------------------------------------------------------
// Task 23 — Anonymous Function

// let calculate = function(a,b){
//     return a+b;
// }
// console.log(calculate(10,20));

// ---------------------------------------------------------------------
// Task 24 — Arrow Function

// let multiply = (a,b) =>{
//     return a*b;
// }
// console.log(multiply(2,3));

// ---------------------------------------------------------------------
// Task 25 — Predict the Output

// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         console.log(a); // 10
//         console.log(b); // 20
//         console.log(c); // 30
//     }
//     console.log(a); // 10; a is global scope; 
//     console.log(b); // error: b is not defined; b is block scope;
//     console.log(c); // error: c is not defined; c is block scope;
// }
// test();

// ----------------------------------------------------------------------
// Hoisting
// Task 26 — Predict

// trying to use a variale before its declaration.
// console.log(a); // undefined; 
// var a = 10;

// before hoisting

// ---------------------------------------------------------------------
// Task 27

// console.log(b); // can't access b let variable before initialization;
// let b = 20; 

// -------------------------------------------------------------------
// Task 28

// console.log(c); // can't access c const variable before initialization;
// const c = 30;

// ---------------------------------------------------------------------
// Task 29 — Self Invoking Function

// (function(){
//     console.log("Welcome to JavaScript");
// })();

// (function(product,discount){
//     console.log(`Today ${product} is now on ${discount}% off`);
// })("Iphone",25);

// -----------------------------------------------------------------------
// Callback / Higher-Order Function
// Task 30

// function welcome(){
//     console.log("Welcome");
// }
// function execute(callback){
//     callback();
// }
// execute(welcome);

// welcome is the callback function 
// execute iss the high-order function

// ----------------------------------------------------------------------
// Generator Function
// Task 31 — Cashback

// function* cashback(){
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// let allcashback = cashback();
// for(g of allcashback){
//     console.log(g);
// }

// -----------------------------------------------------------------------
// Task 32 — Employee Management Console

// let employee = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 50000
//     },
//     {
//         name: "Priya",
//         age: 23,
//         department: "HR",
//         role: "HR Executive",
//         salary: 40000
//     }
// ];

// // 1.for..of

// for(emp of employee){
//     console.log(emp);
// }

// // 2. for..in

// for(emp in employee){
//     console.log(employee[emp]);
// }

// // 3. Create a function to display employee information.

// function display(employee){
//     for(emp of employee){
//         console.log("Name: " + emp.name);
//         console.log("Age: " + emp.age);
//         console.log("Department: " + emp.department);
//         console.log("Role: " + emp.role);
//         console.log("Salary: " + emp.salary);
//     }
// }
// display(employee);

// // 4. Pass employee information to the function.

// function passEmployee(name,age,department,role,salary){
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Department: " + department);
//     console.log("Role: " + role);
//     console.log("Salary: " + salary);
// }
// for(emp of employee){
//     passEmployee(emp.name,emp.age,emp.department,emp.role,emp.salary);
// }

// // 5. Create a function that returns an employee's salary.

// function getSalary(employee) {
//     return employee.salary;
// }
// for (emp of employee) {
//     let salary = getSalary(emp);
//     console.log(emp.name +" Salary: " + salary);
// }

// // 6. check salary

// for (emp of employee) {
//     if (emp.salary >= 40000) {
//         console.log(emp.name + " has salary greater than 40000");
//     }
// }

// // 7. Arrow function for simple calculation:

// let annualSalary = (salary) => salary * 12;
// for (emp of employee) {
//     let yearlySalary = annualSalary(emp.salary);
//     console.log(emp.name + " Annual Salary: " + yearlySalary);
// }

// // 8. Create a generator that produces employee benefits:

// function* benefits(){
//     yield "Medical Insurance";
//     yield "Transport";
//     yield "Food Allowance";
//     yield "Bonus";
// }
// let allBenefit = benefits();
// console.log(allBenefit.next().value);
// console.log(allBenefit.next().value);
// console.log(allBenefit.next().value);
// console.log(allBenefit.next().value);