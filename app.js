// // Chapter 1 => Alerts

// alert("Welcome to JavaScript");

// // Chapter 2 => Variable for Strings

// var name = "Muhammad Shahzaib Khan";
// console.log(name);

// // Chapter 3 => Variable for Numbers

// var cost = 150;
// console.log(cost);

// // Chapter 6 => Variable legal and Illegal

// var name = "Shahzaib" // Legal
// var name1 = "Shahzaib" // Legal
// var $name = "Shahzaib" // Legal
// var firstName = "Shahzaib" // legal
// var first_name = "Shahzaib" // Legal

// var 123 = "Shahzaib" // Illegal
// var %&#- = "Shahzaib" // all special character are illegal except _ and $
// var 2name = "Shahzaib" // Illegal

// // Chapter 5 => Maths Expressions: Family Operators

// var a = 50;
// var b = 40;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // Chapter 6 => Mathe Expressions Unfamiliar Operators

// var a = 10;
// console.log(a++);
// console.log(++a);
// console.log(--a);
// console.log(a--);

// // Chapter 7 => Maths Expressions Eliminating Ambiguity

// var foodCost = 10;
// var  RideCost = 20;
// var tip = 40;
// var total = (10 + 20) / 5;
// console.log(total);

// // Chapter 8 => Concatenating Text Strings

// var firstName = "Muhammad Shahzaib ";
// var lastName = "Khan";
// var city = "Karachi";
// console.log(firstName + lastName + " From " + city);

// // Chapter 9 => Prompts

// var firstName = prompt("Enter Your first name ");
// var lastName = prompt("Enter Your last name");
// console.log(firstName + " " + lastName);

// // Chapter 10 => if Statements

// var chandNazarAgya = true;

// if(chandNazarAgya == true){
//     console.log("EID MUBARAK🎆🎇");
// }else{
//     console.log("Kl bhi roza hai");
// }

// // Chapter 11 => Comparison operators

// var a = "10";
// var b = 10;

// if(a == b){
//     console.log(a + b);
// }else{
//     console.log("Invalid");
// }

// if(a === b){
//     console.log(a + b);
// }else{
//     console.log("Invalid");
// }

// // Chapter 12 => if...else and else if statements

// var a = 10;
// var b = 20;
// var c = 50;
// var d = 10;

// if(a == b){
//     console.log("A is equal to B"); // this is denoted as "Scope"
// }else if(c < b){
//     console.log("B is less than C");
// }else if(d == a){
//     console.log("D is equal to A");
// }else{
//     console.log("conditions did not full filled");
// }

// // Chapter 13 => Testing sets of conditions

// var age = 18;
// var studentCard = true;
// var studentUni = "Organization";

// if(age >= 18){
//     if(studentUni == "Organization"){
//         console.log("Student Card can be made");
//     }else if(studentCard == true){
//         console.log("Student Card can't be made as not in an organization");
//     }
// }else{
//     console.log("age is not valid for the student card")
// }

// Chapter 14 => if statements nested

// var a = 10;
// var b = 10;
// var allowed = true;

// if(a == b){
//     if(allowed == true){
//         console.log("Allowed");
//     }
// }

// if(a == b && allowed == true){
//     console.log("Allowed");
// }

// if(a == b || allowed == true){
//     console.log("Allowed");
// }

// Chapter 15 => Arrays

// var foods = ["Biryani", "Qorma", "Nihari", "Karahi", "Nalli Biryani"];

// foods[2] = "Pulao"; // To overwrite the index of an array
// foods[6] = "Chargha" // To add more values in the array
// foods.push("zinger burger"); // To add a value at the end on the array
// foods.pop() // To remove a value from the end of the array

// console.log(foods); // To know the contents of the array
// console.log(foods.length); // To know the length of the array
// console.log(foods[2]); // To know the second index of the array

// ?? PERCENTAGE CALCULATOR ?? //

// var english = +prompt("Enter English Marks");
// var maths = +prompt("Enter Maths Marks");
// var science = +prompt("Enter Science Marks");
// var urdu = +prompt("Enter Urdu Marks");
// var computer = +prompt("Enter Computer Marks");

// var totalMarks = english + maths + science + urdu + computer;
// var calculate = totalMarks / 500 * 100;

// console.log("Your percentage is " + calculate + "%");