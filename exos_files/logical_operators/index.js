// What's the result of OR?

alert(null || 2 || undefined); // 2 cause its the first true value

// What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // alert with 1 then returns undefined so the OR goes on alert with 2

// What is the result of AND?

alert(1 && null && 2); // null cause its the first false value

// What is the result of AND'ed alerts?

alert(alert(1) && alert(2)); // alert(1) then undefined cause its the first false value

// The result of OR AND OR

alert(null || (2 && 3) || 4); // 3 cause the AND operator goes on first and take 3 cause no false value so it take the last true value then take 3 instead of null and 3 instead of 4

// Check the range between

let age = 14;

if (age >= 14 && age <= 90) {
  alert("OK");
}

// Check the range outside

let ageb = 14;

if (!(ageb > 14 && age <= 90)) {
  alert("OK");
}

if (ageb < 14 || ageb > 90) {
  alert("ok");
}

// A question about "if"

if (-1 || 0) alert("first"); // is going to execute
if (-1 && 0) alert("second"); // is not going to execute
if (null || (-1 && 1)) alert("third"); // is going to execute

// Check the login

let userLogin = prompt("Login");

if (userLogin === "Admin") {
  let password = prompt("Password ?");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (userLogin == "" || userLogin == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
