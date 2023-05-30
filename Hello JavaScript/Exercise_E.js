//Write a program that logs a message with a greeting and your name using the two concatenation methods we used

// Here is an example using the plus operator to concat strings

const greetingStart1 = "Hello, my name is ";
const name1 = "Susana";

const greeting1 = greetingStart1 + name1;

console.log(greeting1); 
// Here is example using the String interpolation to concat strings
const greetingStart2 = "Hello";
const name2 = "Susana";

const greeting2 = `${greetingStart2}, my name is ${name2}`;

console.log(greeting2); 