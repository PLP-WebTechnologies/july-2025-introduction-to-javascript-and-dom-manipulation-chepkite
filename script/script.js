
// Variables and Conditionals

let userName = "Sharon";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}


// Custom Functions


// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Calculate square
function squareNumber(num) {
  return num * num;
}


// Loops


// Loop 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 2) {
  console.log("While loop count:", count);
  count++;
}


// DOM Interactions

// 1. Change content of an element
document.getElementById("message").textContent =
  "Welcome, " + userName + "!";

// 2. Add event listener to a button
document.getElementById("actionBtn").addEventListener("click", function() {
  document.getElementById("message").textContent =
    greetUser(userName) +
    " Your lucky number squared is " + squareNumber(age);
});

// 3. Dynamically add list items with a loop
let list = document.getElementById("list");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}
