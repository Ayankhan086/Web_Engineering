// Task 1 
// document.write("<h2>JavaScript in external file</h2>");

// Task 2
// let a = prompt("Enter first number: ");
// let b = prompt("Enter second number: ");
// let sum = addition(a, b);
// document.write("The sum of " + a + " and " + b + " is " + sum);
// function addition(a, b) {
//     a = parseInt(a);
//     b = parseInt(b);
//     return a + b;
// }


// Task 3
// document.write("<p>x = y + 1  ...Result = 3 <br>x += y     ...Result = 6 <br>x -= y     ...Result = 3 <br>x *= y     ...Result = 9 <br>x /= y     ...Result = 3</p>");


// Task 4 
// Prompt the user for 3 integers
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));
// let num3 = parseInt(prompt("Enter the third integer:"));

// // Compute sum and average
// let sum = num1 + num2 + num3;
// let average = sum / 3;

// // Display results in a dialog box
// alert(
//     "Sum = " + sum +
//     "\nAverage = " + average
// );


// Task 5
// JavaScript array containing dropdown data
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// // Reference to the dropdown element
// let dropdown = document.getElementById("myDropdown");

// // Loop through the array and add each item as an option
// for (let i = 0; i < fruits.length; i++) {
//     let option = document.createElement("option");
//     option.text = fruits[i];
//     option.value = fruits[i];
//     dropdown.add(option);
// }



// Task 6

// function calculateGrade() {
//     // Get values from input fields
//     let regNo = document.getElementById("regNo").value;
//     let name = document.getElementById("name").value;
//     let semester = document.getElementById("semester").value;
//     let webEng = parseInt(document.getElementById("webEng").value);
//     let compProg = parseInt(document.getElementById("compProg").value);
//     let oop = parseInt(document.getElementById("oop").value);
//     let dsa = parseInt(document.getElementById("dsa").value);
//     let ai = parseInt(document.getElementById("ai").value);

//     // Calculate total and percentage
//     let totalMarks = webEng + compProg + oop + dsa + ai;
//     let percentage = (totalMarks / 500) * 100;

//     // Determine grade based on percentage
//     let grade;
//     if (percentage >= 90) grade = "A";
//     else if (percentage >= 80) grade = "B";
//     else if (percentage >= 70) grade = "C";
//     else if (percentage >= 60) grade = "D";
//     else grade = "F";

//     // Display result in tabular format
//     let table = `
//         <table border="1" cellpadding="10" cellspacing="0">
//             <tr>
//                 <th>Registration No</th>
//                 <th>Name</th>
//                 <th>Semester</th>
//                 <th>Web Engineering</th>
//                 <th>Computer Programming</th>
//                 <th>Object Oriented Programming</th>
//                 <th>Data Structures & Algorithms</th>
//                 <th>Artificial Intelligence</th>
//                 <th>Obtained Marks</th>
//                 <th>Percentage</th>
//                 <th>Grade</th>
//             </tr>
//             <tr>
//                 <td>${regNo}</td>
//                 <td>${name}</td>
//                 <td>${semester}</td>
//                 <td>${webEng}</td>
//                 <td>${compProg}</td>
//                 <td>${oop}</td>
//                 <td>${dsa}</td>
//                 <td>${ai}</td>
//                 <td>${totalMarks}</td>
//                 <td>${percentage.toFixed(2)}%</td>
//                 <td>${grade}</td>
//             </tr>
//         </table>
//     `;

//     document.getElementById("result").innerHTML = table;
// }


// Task 7

// Define calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
}

// Map operators to functions
const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

function startCalculator() {
    // Prompt user for input
    let num1 = parseFloat(prompt("Enter the first operand:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second operand:"));

    // Call the function using the operator as key
    let result = operations[operator]?.(num1, num2);

    // Check if operator is valid
    if (result === undefined) {
        alert("Invalid operator! Please use +, -, *, or /.");
    } else {
        alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
    }
}
