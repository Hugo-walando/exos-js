// Last loop value

let i = 3;

while (i) {
  alert(i--);
}
// last value alerted is 1

// Which values does the while loop show?

let a = 0;
while (++a < 5) alert(a);
// 1..4

let b = 0;
while (b++ < 5) alert(b);
// 1..5

// Which values get shown by the "for" loop?

for (let i = 0; i < 5; i++) alert(i);
//0..4

for (let i = 0; i < 5; ++i) alert(i);
//0..4

// Output even numbers in the loop

for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

// Replace "for" with "while"

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let c = 0;
while (c < 3) {
  c++;
}

// Repeat until the input is correct

let userAnswerNumber;
do {
  userAnswerNumber = prompt("Enter a number greater than 100", 0);
} while (userAnswerNumber <= 100 && userAnswerNumber);

// Output prime numbers
let n = 10;
next: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }
  alert(i);
}
