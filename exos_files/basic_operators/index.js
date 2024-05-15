// The postfix and prefix forms

let a = 1,
  b = 1;

let c = ++a;
let d = b++;

// a = 2
// b = 2
// c = 2
// d = 1

// Assignement result

let e = 2;

let f = 1 + (a *= 2);

// a = 4
// x = 5

// Type conversions

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -4
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

//Fix the addition

// base code :

// let g = prompt("First number?", 1);
// let h = prompt("Second number?", 2);

// alert(g + h);

//fix :

let g = +prompt("First number?", 1);
let h = +prompt("Second number?", 2);

alert(g + h); // 12
