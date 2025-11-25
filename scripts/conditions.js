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