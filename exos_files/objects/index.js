// Hello, object

let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;

// Check for emptiness

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

// Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

// Multiply numeric property values by 2

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
