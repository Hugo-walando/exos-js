// Using "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref: hits,
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result? : "Error"

// Create a calculator

let calculator = {
  read() {
    this.a = +prompt("Entrez la value de a", 0);
    this.b = +prompt("Entrez la value de b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};
