// Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// no the else is not required

// Rewrite the function using '?' or '||'

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// Function min(a, b)

function min(a, b) {
  return a > b ? a : b;
}

// Function pow(x,n)

function pow(x, n) {
  return x ** n;
}
