// // Create object
// let person = {
//     firstName: "waheed",
//     lastName: "xyz",
//     age: 20
// };

// // Create table
// let table = document.createElement("table");
// table.border = "1";

// // Create header row
// let headerRow = document.createElement("tr");

// let keyHeader = document.createElement("th");
// keyHeader.innerText = "Key";

// let valueHeader = document.createElement("th");
// valueHeader.innerText = "Value";

// headerRow.appendChild(keyHeader);
// headerRow.appendChild(valueHeader);
// table.appendChild(headerRow);

// // Loop through object
// for (let key in person) {

//     let row = document.createElement("tr");

//     let keyCell = document.createElement("td");
//     keyCell.innerText = key;

//     let valueCell = document.createElement("td");
//     valueCell.innerText = person[key];

//     row.appendChild(keyCell);
//     row.appendChild(valueCell);

//     table.appendChild(row);
// }

// // Display table on page
// document.body.appendChild(table);






// function addNumbers()
// {
//     var n1 = parseInt(document.getElementById("num1").value);
//     var n2 = parseInt(document.getElementById("num2").value);

//     var sum = n1 + n2;

//     document.getElementById("result").value = sum;
// }



// document.getElementById("newEntryBtn").addEventListener("click", function () {
//     var dropdown = document.getElementById("dropdown");
//     var textbox = document.createElement("input");
//     textbox.type = "text";
//     textbox.id = "newEntryInput";
//     dropdown.parentNode.replaceChild(textbox, dropdown);
// });







// document.getElementById("signupForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     clearErrors();

//     var isValid = true;

//     // Name validation
//     var name = document.getElementById("name").value.trim();
//     if (name === "") {
//         document.getElementById("nameErr").innerText = "Please fill Name field";
//         isValid = false;
//     }

//     // Gender validation
//     var genderOptions = document.getElementsByName("gender");
//     var genderSelected = false;
//     for (var i = 0; i < genderOptions.length; i++) {
//         if (genderOptions[i].checked) {
//             genderSelected = true;
//             break;
//         }
//     }
//     if (!genderSelected) {
//         document.getElementById("genderErr").innerText = "Please select Gender";
//         isValid = false;
//     }

//     // Email validation
//     var email = document.getElementById("email").value.trim();
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === "") {
//         document.getElementById("emailErr").innerText = "Please fill Email field";
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         document.getElementById("emailErr").innerText = "Please enter a valid Email";
//         isValid = false;
//     }

//     // Address validation
//     var address = document.getElementById("address").value.trim();
//     if (address === "") {
//         document.getElementById("addressErr").innerText = "Please fill Address field";
//         isValid = false;
//     }

//     // Login ID validation
//     var loginId = document.getElementById("loginId").value.trim();
//     if (loginId === "") {
//         document.getElementById("loginErr").innerText = "Please fill Login ID field";
//         isValid = false;
//     }

//     // Password validation
//     var password = document.getElementById("password").value.trim();
//     if (password === "") {
//         document.getElementById("passwordErr").innerText = "Please fill Password field";
//         isValid = false;
//     } else if (password.length < 6) {
//         document.getElementById("passwordErr").innerText = "Password must be at least 6 characters";
//         isValid = false;
//     }

//     // Policy checkbox validation
//     var policy = document.getElementById("policy").checked;
//     if (!policy) {
//         document.getElementById("policyErr").innerText = "You must agree to the Policy";
//         isValid = false;
//     }

//     if (isValid) {
//         alert("Form submitted successfully!");
//         document.getElementById("signupForm").reset();
//     }
// });

// function clearErrors() {
//     var errorFields = ["nameErr", "genderErr", "emailErr", "addressErr", "loginErr", "passwordErr", "policyErr"];
//     for (var i = 0; i < errorFields.length; i++) {
//         document.getElementById(errorFields[i]).innerText = "";
//     }
// }




document.getElementById("inputBox").addEventListener("select", function () {
    var input = document.getElementById("inputBox");
    var selectedText = input.value.substring(input.selectionStart, input.selectionEnd);
    document.getElementById("displayBox").innerText = selectedText;
});