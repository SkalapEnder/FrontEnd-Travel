// Task 1
alert("Task 1");
let name = prompt("Please enter your name:");
alert(`Good morning, ${name}!`);

// Task 2
// Parse Int - convert a string into an integer
alert("Task 2");
let age = parseInt(prompt("Please enter your age:"));
if (age >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("Sorry, you are not eligible to vote.");
}

// Task 3
// to Fixed - set precision
alert("Task 3");
let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
let celsius = (fahrenheit - 32) * (5 / 9);
alert(`The temperature in Celsius is ${celsius.toFixed(2)}°C.`);

// Task 4
// Parse Float - convert a string into an float
alert("Task 4");
let inches = parseFloat(prompt("Enter value in inches:"));
let centimeters = inches * 2.54;
alert(`The length in centimeters is ${centimeters.toFixed(2)} cm.`);

// Task 5
// Math.Random - from 0 to 1
alert("Task 5");
let couponCode = Math.floor(Math.random() * 9999);
alert("Wait...")
alert(`Your coupon code is: ${couponCode}.`);

// Task 6
alert("Task 6");
let correctUsername = "admin";
let correctPassword = "12345";
var username;
var password;

do{
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if (username == correctUsername && password == correctPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Try Again");
    }
} while(username != correctUsername || password != correctPassword);

// Task 7
// === - if both are same type
alert("Task 7");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number: " + randomNumber);
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (guess === randomNumber) {
        alert("Correct! You guessed the number!");
    } else if (guess > randomNumber) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
} while (guess !== randomNumber);