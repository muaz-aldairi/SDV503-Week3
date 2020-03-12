// Arithmetic operators

let x= 10;
let y= 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

let result = x + y;
console.log(result);

// Increment operator pre-increment
let a= 10;
console.log(a);
console.log(++a);
console.log(a);
console.log(++a);
console.log(a);
console.log(++a);
console.log(a);

// Increment operator post-increment
let b= 10;
console.log(b);
console.log(b++);
console.log(b);
console.log(b++);
console.log(b);
console.log(b++);
console.log(b);

//Difference between Pre-Increment and Post-Increment Operator
let m=10;
let n= m;

console.log("pre - Increment");
n= ++m
console.log(m);
console.log(n);

console.log("post - Increment");
n= m++
console.log(m);
console.log(n);

// decrement operator pre- decrement
let c= 10;
console.log(c);
console.log(--c);
console.log(c);
console.log(--c);
console.log(c);
console.log(--c);
console.log(c);

// decrement operator post-decrement
let d= 10;
console.log(d);
console.log(d--);
console.log(d);
console.log(d--);
console.log(d);
console.log(d--);
console.log(d);

//Difference between Pre-decrement and Post-decrement Operator
let k=10;
let f= k;

console.log("pre - decrement");
f= --k
console.log(k);
console.log(f);

console.log("post - decrement");
f= k--
console.log(k);
console.log(f);

//Increment/ Decrement Operator inside an expression

let e=1;
console.log(e);
console.log(10 * ++e);
console.log(e);

let g=1;
console.log(g);
console.log(10 * g--);
console.log(g);

