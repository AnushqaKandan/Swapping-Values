// Arithmetic
let first_number = 15;
let second_number = 17;

first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;

console.log("first_number =", first_number);
console.log("second_number =", second_number);

// Temporary

let temp = first_number;
first_number = second_number;
second_number = temp;

console.log("first_number =", first_number);
console.log("second_number =", second_number);

// Destructuring

[first_number, second_number] = [second_number, first_number];

console.log("first_number =", first_number);
console.log("second_number =", second_number);