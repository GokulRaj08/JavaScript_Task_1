// Task 1 — Variables
// ---------------------------
// var Name="gokul";
// let Age=21;
// let city="salem";
// const college="srm";
// console.log(Name);
// console.log(Age);
// console.log(city);
// console.log(college);

// Name="Raj";
// Age=24;
// city="chennai";
// college="university";

// var Name="Gokul Raj";
// let Age=25;
// let city="coimbatore";
// const college="SRM University";

// console.log(Name);
// console.log(Age);
// console.log(city);
// console.log(college);

// Task 2 — Printing Statements
// // ------------------------------
// console.log("Hello");
// alert("Welcome to JS");
// confirm("Are u sure");
// prompt("Enter your name");
// document.writeln("This is a document");

// Task 3 — User Details
// -----------------------------

// let Name=prompt("Enter your name");
// let Age=prompt("Enter your age");
// let city=prompt("Enter your city");
// let qualification=prompt("Enter your qualification");
// console.log("Name:",Name);
// console.log("Age:",Age);
// console.log("city:",city);
// console.log("qualification:",qualification);

// Task 4 — Find Data Types
// -------------------------------

// let Name="JavaScript";
// let Num=100;
// let F=99.5;
// let boo1=true;
// let boo2=false;
// let n;
// let n2=null;
// console.log(typeof(Name));
// console.log(typeof(Num));
// console.log(typeof(F));
// console.log(typeof(boo1));
// console.log(typeof(boo2));
// console.log(typeof(n));
// console.log(typeof(n2));


// Task 5 — Student Array
// -----------------------------

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[students.length-1]);
// console.log(students.length);


// Task 6 — Employee Object
// ------------------------------

// let employee={
//     name:"gokul",
//     age: 21,
//     role: "Developer",
//     skills: ["JavaScript", "Python", "SQL"],
//     isWorking: true,
//     qualification: ["B.E","M.E","B.Tech","ph.D"]
// };
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.role);
// console.log(employee.skills[0]);
// console.log(employee.qualification[employee.qualification.length-1])
// console.log(employee.isWorking);


// Task 7 — Calculator
// ---------------------------------

// let a = 20;
// let b = 5;
// console.log("Addition:",a+b);
// console.log("Subtraction:",a-b);
// console.log("Multiplication:",a*b);
// console.log("Division:",a/b);
// console.log("Modulus:",a%b);
// console.log("Exponentiation:",a**b);

// Task 8 — Shopping Bill
// ----------------------------
//  let Shirt = 999;
//  let Pant = 1499;
//  let Shoes = 1999;
//  let Bag = 799;
//  let totalBill=Shirt+Pant+Shoes+Bag;
//  console.log("Total Bill:",totalBill)


// Task 9 — Increment & Decrement
// -------------------------------------
// A
// let a = 10;
// let b = a++;
// console.log(a); 11
// console.log(b); 10

// B
// let a = 10;
// let b = ++a;
// console.log(a); 11
// console.log(b); 11

// C
// let a = 10;
// let b = a--;
// console.log(a); 9
// console.log(b); 10

// D
// let a = 10;
// let b = --a;
// console.log(a); 9
// console.log(b); 9

// Assignment Operator Tasks
// Task 10
// ------------------------------
// let num = 10;
// num+=5;
// console.log(num); 15
// num -= 3
// console.log(num) 7
// num *= 2
// console.log(num) 20
// num /= 4
// console.log(num) 2.5
// num %= 3
// console.log(num) 1
// num **= 2
// console.log(num) 100


// Task 11 — Find Output
// --------------------------


// console.log(10 > 5); true
// console.log(10 < 5); false
// console.log(10 >= 10); true
// console.log(10 <= 9); false
// console.log(5 == "5"); true
// console.log(5 === "5"); false
// console.log(10 != "10"); false
// console.log(10 !== "10"); true


// Task 12 — AND
// ---------------------

// console.log(true && true); true
// console.log(true && false); false
// console.log(false && true); false
// console.log(false && false); false

// Task 13 — OR
// --------------------
// console.log(true || true); true
// console.log(true || false); true 
// console.log(false || true); true
// console.log(false || false); false
 



// Task 14 — NOT
// ---------------------------

// console.log(!true); false
// console.log(!false); true
// console.log(!(5 > 10)); true
// console.log(!(10 > 5)); false

//  Task 15 — Combination
// -----------------------------

// console.log(5 == "5" && !(5 === 5) || 6 > 7); false 
// console.log(10 > 5 && 8 < 12 || 4 === "4"); true
// console.log(7 === 7 && 10 != "10" || 5 >= 5); true
// console.log(15 < 10 || 20 > 15 && 5 == "5"); true


// Task 16 — Voting
// -----------------------

// let age = 10;
// console.log(age>=18 ?"Eligible to vote": "Not eligible")


// Task 17 — Password
// -----------------------

// let password = true;
// console.log(password ?  "Login successful": "Wrong password")


// Task 18 — User Introduction
// ------------------------------

// let Name = "Naveen";
// let age = 25;
// let city = "Trichy";
// console.log("My name is " + Name+  ". I am " +age +  " years old. I live in "+city+ "." )
// console.log("My name is " +`${Name}` +". I am " +`${age}` +  " years old. I live in " +`${city}` +"." )



// Task 19 — String Conversion
// ---------------------------------
// let n=String(100);
// console.log(n,typeof(n));
// let n=String(true);
// console.log(n,typeof(n));
// let n=String(undefined)
// console.log(n,typeof(n))
// let n=String(null)
// console.log(n,typeof(n))
// let n=String([1,2]);
// console.log(n,typeof(n))



// Task 20 — Number Conversion
// ------------------------------


// console.log(Number());       0
// console.log(Number(""));     0
// console.log(Number("123"));  123
// console.log(Number("a1"));   NaN
// console.log(Number(true));    1
// console.log(Number(false));   0
// console.log(Number(undefined));NaN
// console.log(Number(null));      0




// Task 21 — Boolean Conversion
// ----------------------------------


// console.log(Boolean());        false
// console.log(Boolean(""));      false
// console.log(Boolean("hello")); true 
// console.log(Boolean(123));     true
// console.log(Boolean(true));    true   
// console.log(Boolean(false));   false
// console.log(Boolean(undefined));false
// console.log(Boolean(null));     false
// console.log(Boolean([]));       true
// console.log(Boolean({}));        true


// Task 22 — Voting Eligibility
// -----------------------------------

// let age=prompt("Enter your Age");
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
// }

// Task 23 — Positive or Negative
// ----------------------------------
// let num=prompt("Enter your number")
// if(num==0){
//     console.log("Zero");
// }
// else if(num<0){
//     console.log("Negative");
// }
// else{
//     console.log("Positive");
// }

// Task 24 — Grade System
// --------------------------------
// let mark=prompt("Enter your Mark");
// if( mark>=90 && mark<=100){
//     console.log("A Grade");
// }
// else if(mark>=80 && mark<=89){
//     console.log("B grade");
// }
// else if(mark>=70 && mark<=79){
//     console.log("C Grade");
// }
// else if(mark>=60 && mark<=69){
//     console.log("D Grade");
// }
// else{
//     console.log("Fail");
// }


// Task 25 — Job Eligibility
// --------------------------
// let age=prompt("Age");
// let Height=prompt("Height");
// let weight=prompt("Height");
// if(age>=18){
//     if(Height>=160){
//         if(weight>=60){
//             console.log("Congratulations! You are selected");
//         }
//         else{
//             console.log("Low weight")
//         }
//     }
//      else{
//             console.log("Low Height")
//     }
// }
// else{
//     console.log("low age");
// }

// Task 26 — Traffic Light
// -------------------

// let color=prompt("Enter color");
// switch(color){
// case "red":
//     console.log("Stop");
//     break;
// case "Yellow":
//     console.log("Ready");
//     break;
// case "green":
//     console.log("Go");
//     break;}


// Task 27 — Day
// -------------------
// let day=3;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day");
//         break;

// }


// Task 28 — Student Result System
// ------------------------------------

// let Name=prompt("Enter your Name");
// let age=prompt("Enter the Age");
// let City=prompt("Enter the City");


// let Tamil=prompt("Enter tamil mark");
// let English=prompt("Enter your English mark");
// let Maths=prompt("Enter maths mark");

// let total=Number(Tamil)+Number(English)+Number(Maths);
// let Avg=total/3;
// console.log("Name:",`${Name}`);
// console.log("Age:",`${age}`);
// console.log("City:",`${City}`);
// console.log("Total:",total);
// console.log("Average:",Avg);

// let Grade;
// if(total>=90){
//     Grade="A";
// }
// else if(total>=80){
//     Grade="B";
// }
// else if(total>=70){
//    Grade="C";
// }
// else if(total>=60){
//     Grade="D";
// }
// else{
//    Grade="Fail";
// }
// console.log("Grade:",`${Grade}`);


// if(age>=18){
//     console.log("Voting: Eligible")
// }
// else{
//     console.log("Voting: Not eligible");
// }


