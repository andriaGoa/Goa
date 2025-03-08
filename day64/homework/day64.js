var x = 4
var y = 5
var z = 6
var p = 7
console.log(x + y + z + p)
console.log(x - y - z - p)
console.log(x * y * z * p)
console.log(x / y / z / p)

var num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
var num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

var firstName = prompt("enter name:");
var lastName = prompt("enter surname: ");
console.log(firstName);
console.log(lastName);

let number1 = Number(prompt("enter a number: "))
let number2 = Number(prompt("enter a number: "))
console.log(number1 > number2)


if (x == y) {
    console.log("are equal");
} else {
    console.log("are not equal");
}

var userInput = Number(prompt("enter num:"));
if (userInput < 50) {
    console.log("less then 50");
} else {
    console.log("more than 50");
}

var num1 = Number(prompt("enter num:"));
var num2 = Number(prompt("enter num:"));
if (num1 + num2 > 100) {
    console.log("sum is more then 100.");
} else {
    console.log("either equal or less.");
}

var userInput = parseFloat(prompt("enter num:"));
if (userInput >= 10) {
    console.log("more or equal.");
} else 
    console.log("less.");

let Number1 = 5
let Number2 = Number(prompt("enter a number: "))
console.log(Number1 => Number2)

var Name = "andria";
var Name2 = prompt("enter name: ");
if (Name == Name2) {
    console.log("same");
} else {
    console.log("not same");
}

var password = prompt("enter pasword:");
var confirmpassword = prompt("again:");
if (password === confirmPassword) {
    console.log("=");
} else {
    console.log("!=");
}
