// if (a string with zero)

if ("0") {
  alert("Hello");
}

// yes cause its not an empty string

// The name of JavaScript

let answerOfficialJavascriptName = prompt(
  "What's the official javascript name ?"
);

if (answerOfficialJavascriptName === "ECMAScript") {
  alert("Right !");
} else {
  alert("You don't know? 'ECMAScript'!");
}

// Show the sign

let userAnswerNumber = +prompt("Enter a number");

if (userAnswerNumber > 1) {
  alert(1);
} else if (userAnswerNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

// Rewrite 'if' into '?'

let result = 1 + 2 < 4 ? "Below" : "Over";

// Rewrite 'if..else' into '?'

let message =
  login == "Employee"
    ? "hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "no login"
    : "";
