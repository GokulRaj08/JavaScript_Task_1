// // Task 1 — Student Result Analyzer
// // -----------------------------------------


// let Name=prompt("Enter the Name");
// let Department=prompt("Enter the Department");
// let subject=[];
// for(let i=0;i<5;i++){
//    subject[i]=Number(prompt("Enter your " +`${i}`+ " Mark"));
// }
// let totalMarks=Number(subject[0])+Number(subject[1])+Number(subject[2])+Number(subject[3])+Number(subject[4])
// let Average=totalMarks/5;

// console.log("Name:",Name);
// console.log("Department:",Department);
// console.log("TotalMarks:",totalMarks);
// console.log("Average:",Average);
// if(Average>=50){
//     console.log("Your Pass");

// }
// else{
//     console.log("You fail");
// }
// function grade(Average){
//     if(Average>=90 && Average<=100){
//         console.log("Grade A")
//     }
//     else if(Average>=75 && Average<=89){
//         console.log("Grade B");
//     }
//     else if(Average>=60 && Average<=74){
//         console.log("Grade C")
//     }
//     else if(Average>=50 && Average<=59){
//         console.log("Grade D")
//     }
//     else{
//         console.log("You Fail")
//     }
// }
// grade(Average)



// // Task 2 — Employee Salary Calculator
// // -----------------------------------------


// let employee={
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }
// function calculateSalary(employee){
//     console.log("Your salary is:",employee.salary);
//     let bonus=0;
//     if(employee.experiencee>=2){
//         bonus=employee.salary*0.1;

//     }
//     else{
//         bonus=employee.salary*0.15;
//     }
//     let totalSalary=employee.salary+bonus;
//     console.log("Your TotalSalary:",totalSalary);
    
// }
// calculateSalary(employee)


// Task 3 — Product Filter System
// ------------------------------------------

// let products = [
// { name: "Laptop", 
//     price: 55000, 
//     category: "electronics" 
// },

// { name: "Mouse",
//      price: 800,
//       category: "electronics" 
//     },

// { name: "Shirt",
//      price: 1200, 
//      category: "fashion"
//      },

// { name: "Shoes",
//      price: 2500,
//       category: "fashion"
//      },

// { name: "Phone",
//      price: 30000,
//       category: "electronics"
//      }

// ];
// let arr1=products.filter((c,i,t)=>{
//     return c.price>=2000;
// })

// console.log(arr1);
// let arr2=products.filter((c,i,t)=>{
//     return c.category=="electronics";
// });
// console.log(arr2);
// let arr3=products.find((c,i,t)=>{
//     return c.price<1000;
// })
// console.log(arr3);
// let arr4=products.reduce((acc,c,i,t)=>{
//     return c.price+acc
// },0);
// console.log(arr4);
// let arr5=products.some((c,i,t)=>{
//     return c.price>50000;
// })
// console.log(arr5);
// let arr6=products.every((c,i,t)=>{
//     return c.price>500;
// })
// console.log(arr6);



// Task 4 — Employee Management
// -----------------------------------
// let employees = [
//     {
//         id: 101,
//         name: "Kavin",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Arun",
//         role: "Backend Developer",
//         salary: 45000
//     },
//     {
//         id: 103,
//         name: "Priya",
//         role: "UI/UX Designer",
//         salary: 42000
//     },
//     {
//         id: 104,
//         name: "Vijay",
//         role: "Full Stack Developer",
//         salary: 55000
//     },
//     {
//         id: 105,
//         name: "Divya",
//         role: "Data Analyst",
//         salary: 48000
//     },
//     {
//         id: 106,
//         name: "Rahul",
//         role: "AI/ML Engineer",
//         salary: 60000
//     }
// ];

// let em = employees.map((c,i,t)=>{
// return c.name;
// })
// console.log(em)
// let em1=employees.filter((c,i,t)=>{
//     return c.salary>40000;
// })
// console.log(em1);
// let em2=employees.filter((c,i,t)=>{
//     return c.id==103;
// })
// console.log(em2);
// let em3=employees.reduce((acc,c,i,t)=>{
// return c.salary+acc
// },0);
// console.log(em3);
// let em4=employees.sort((a,b)=>{
//     return b.salary-a.salary;
// })
// console.log(em4);
// let newArray=[];
// let emp=employees.map((c,i,t)=>{
    // return c.name
// })
// console.log(emp)


// Task 5 — Shopping Cart
// -------------------------

// let cart = [
// { name: "Laptop", 
//     price: 50000, 
//     quantity: 1 
// },
// { name: "Mouse", 
//     price: 1000,
//      quantity: 2 
//     },
// { name: "Keyboard", 
//     price: 2000,
//      quantity: 1
//      }
// ];
// function calculateCart(cart) {

//     let total = cart.reduce((acc,c,i,t)=> {
//      return c.price+acc
//     }, 0);
//     console.log(total)

//     let discount = 0;

//     if (total > 50000) {
//         discount = total * 10 / 100;
//     }

//     let finalAmount = total - discount;

//     console.log("Total Cart Value: " + total);
//     console.log("Discount: " + discount);
//     console.log("Final Payable Amount: " + finalAmount);
// }

// calculateCart(cart);

// Task 6 — Student Search System
// ---------------------------------------


// let students = [
// { name: "Arun",
//      age: 21, 
//      mark: 85 
//     },
// { name: "Priya",
//      age: 22, 
//      mark: 92 
//     },
// { name: "Karthi", 
//     age: 20,
//      mark: 67 
//     },
//  { name: "Dinesh", 
//     age: 23,
//      mark: 45
//      }
// ];
// let names = students.map((c, i, t) => {
//     return c.name;
// });
// console.log(names);

// let above80 = students.filter((c, i, t) => {
//     return c.mark > 80;
// });
// console.log(above80);

// let student = students.find((c, i, t) => {
//     return c.name === "Priya";
// });
// console.log(student);

// let total = students.reduce((c, i, t) => {
//     return c + i.mark;
// }, 0);

// let average = total / students.length;
// console.log(average);

// let failed = students.some((c, i, t) => {
//     return c.mark < 40;
// });
// console.log(failed);

// let everyonePassed = students.every((c, i, t) => {
//     return c.mark > 40;
// });
// console.log(everyonePassed);

// let sortedStudents = students.sort((c, i) => {
//     return i.mark - c.mark;
// });
// console.log(sortedStudents);



// Task 7 — Array Transformation Challenge
// ------------------------------------------------

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// let doubled = numbers.map((c, i, t) => {
//     return c * 2;
// });
// console.log(doubled);

// let evenNumbers = numbers.filter((c, i, t) => {
//     return c % 2 === 0;
// });
// console.log(evenNumbers);

// let greaterThan15 = numbers.filter((c, i, t) => {
//     return c > 15;
// });
// console.log(greaterThan15);

// let firstNumber = numbers.find((c, i, t) => {
//     return c > 20;
// });
// console.log(firstNumber);

// let total = numbers.reduce((c, i, t) => {
//     return c + i;
// }, 0);
// console.log(total);

// let hasGreaterThan40 = numbers.some((c, i, t) => {
//     return c > 40;
// });
// console.log(hasGreaterThan40);

// let allPositive = numbers.every((c, i, t) => {
//     return c > 0;
// });
// console.log(allPositive);

// let highestToLowest = numbers.sort((c, i) => {
//     return i - c;
// });
// console.log(highestToLowest);



// Task 8 — String Analyzer
// ------------------------------

// let sentence = prompt("Enter a sentence");

// let upperCase = sentence.toUpperCase();
// let lowerCase = sentence.toLowerCase();
// let hasJavaScript = sentence.includes("JavaScript");
// let firstCharacter = sentence.slice(0, 1);
// let lastCharacter = sentence.slice(-1);
// let words = sentence.split(" ");
// let replacedSentence = sentence.replace("JavaScript", "Python");

// console.log("Total characters:", sentence.length);
// console.log("Uppercase:", upperCase);
// console.log("Lowercase:", lowerCase);
// console.log("Contains JavaScript:", hasJavaScript);
// console.log("First character:", firstCharacter);
// console.log("Last character:", lastCharacter);
// console.log("Number of words:", words.length);
// console.log("Replaced sentence:", replacedSentence);
// console.log("Sentence as array:", words);



//  Final Mini Project — Employee Dashboard
// ----------------------------------------------


// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];

// let employeeList = employees.map((c, i, t) => {
//     return c.name;
// });
// console.log(employeeList);

// let searchName = prompt("Enter employee name");

// let searchEmployee = employees.find((c, i, t) => {
//     return c.name.toLowerCase() === searchName.toLowerCase();
// });
// console.log(searchEmployee);

// let department = prompt("Enter department");

// let departmentEmployees = employees.filter((c, i, t) => {
//     return c.department.toLowerCase() === department.toLowerCase();
// });
// console.log(departmentEmployees);

// let salaryEmployees = employees.filter((c, i, t) => {
//     return c.salary > 50000;
// });
// console.log(salaryEmployees);

// let totalSalary = employees.reduce((c, i, t) => {
//     return c + i.salary;
// }, 0);
// console.log(totalSalary);

// let highestSalary = employees.reduce((c, i, t) => {
//     if (c.salary > i.salary) {
//         return c;
//     } else {
//         return i;
//     }
// });
// console.log(highestSalary);

// let experiencedEmployees = employees.filter((c, i, t) => {
//     return c.experience > 3;
// });
// console.log(experiencedEmployees);

// let lowToHigh = [...employees].sort((c, i) => {
//     return c.salary - i.salary;
// });
// console.log(lowToHigh);

// let highToLow = [...employees].sort((c, i) => {
//     return i.salary - c.salary;
// });
// console.log(highToLow);

// let averageSalary = totalSalary / employees.length;

// console.log(employees.length);
// console.log(totalSalary);
// console.log(highestSalary.salary);
// console.log(Math.round(averageSalary));