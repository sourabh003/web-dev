// = is for assignment
// == is for loose equality comparison. (ignores type)
// === is for strict equality comparison (consideres type)

// type conversion
// Number("123"); // 123
// String(123);
// Boolean(1); // true
// Boolean(0); // false

// < , less than
// > , greater than
// <= , less than or equal to
// >= , greater than or equal to
// && , logical AND (both should be true)
// || , logical OR (at least one should be true)
// ! , logical NOT (reverses the boolean value)
// !! , double NOT (converts to boolean)
// ! , for variable (undefined, null, 0, "", NaN are true; others are false)

// let name = "john";
// let age = 17

// if (name === "john" && age > 18) {
// 	console.log("valid");
// } else {
// 	console.log("invalid");
// }

// let email = "john@gmail.com"
// let phone = "1234567890"

// if (email.length > 0 || phone.length === 10) {
// 	console.log("valid");
// } else {
// 	console.log("invalid");
// }

// !! for string (non-empty string is true, empty string is false)
// !! for number (non-zero is true, zero is false)

// let num = 1

// if(!!num) {
//     console.log("num present");
// } else {
//     console.log("num absent");
// }

// function askForName() {
//     let fName = prompt("Enter your name:");
//     if (!fName) {
//         askForName();
//     } else {
//         return fName
//     }
// }

// let userName = askForName();

// let number;
// // let number = prompt("Enter a number:");

// if (number === 1) {
//     console.log("checking balance");
// } else if(number === 2) {
//     console.log("depositing money");
// } else if(number === 3) {
//     console.log("withdrawing money");
// } else {
//     console.log("invalid option");
// }

// let number = 4
// let name = "john"

// switch (number) {
//     case 1:
//         console.log("checking balance for " + name);
//         // asdlfjsdf
//         // asdlfjdslf
//         // asdlfjdslflasdf
//         // lasdfjds
//         // lasdfdsf
//         break;
//     case 2:
//         console.log("depositing money");
//         break;
//     case 3:
//         console.log("withdrawing money");
//         break;
//     default:
//         console.log("invalid option");
// }

// named anonymous function
// const add1 = function() {
//     console.log("anonymous function");
// }

// // named function
// function sum(num1, num2) {
// 	return num1 + num2;
// }

// // arrow functions
// let num = 10;

// //  arrow function
// let add = () => {
//     console.log("anonymous arrow function");
// };

// callback function
// a function passed as an argument to another function

// let morningGreeting = function (name) {
//     console.log("Good morning, " + name);
// }

// let eveningGreeting = function (name) {
//     console.log("Good evening, " + name);
// }

// // shared (common file)
// function greetUser(name, greetingFunc) {
//     greetingFunc(name)
// }

// greetUser("John", morningGreeting); // file 1 (import from common file)

// greetUser("John", eveningGreeting); // file 2

// setTimeout, setInterval

// perform action after some time (setTimeout)

// 1s = 1000ms
// setTimeout(function () {
//     console.log("This message is shown after 5 seconds");
// }, 5000)

// perform action repeatedly after some time interval
// const interval = setInterval(function () {
// 	console.log("hello");
// }, 1000);

// setTimeout(() => {
// 	clearInterval(interval);
// }, 10000);

console.log("Conditions file loaded");


const greeting = () => {
    // alert("Hello, welcome to our website!");
    document.getElementById('userName').innerText = "Welcome, User!";
}



// greeting()