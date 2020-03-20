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

//String Concatenation
let a1 = " Hello";
let b1 = " world";
let c1= a1+b1;
let d1= " Hello" + "world";
console.log(a1+b1);
console.log(c1);
console.log(d1);
console.log( `${a1} ${b1}`);

//Number as a String 
//(+)

console.log(10 + 10 +"5");

//(-,*,/)
console.log( 10 -"5");
console.log( 10 *"5");
console.log( 10 /"5");

// converting strings to numbers
//the unary plus works first and then the binary plus
let girls="10";
let boys="5";
console.log(girls+boys);
console.log(+girls + +boys);

// converting boolean to numbers
console.log(+true);
console.log(+false);
console.log(+"");

// comma operator
let com = (2+3,3+4);
console.log(com);
console.log(2+3,4+3);

// Assignment Operator

let l= 10;
console.log(l);
l+= 10;
console.log(l);
l-= 10;
console.log(l);
l*= 10;
console.log(l);
l/= 10;
console.log(l);
l **= 10;
console.log(l);
 l %= 10;
console.log(l);

// comparison operater

console.log(10==5);
console.log(10!=5);
console.log(10<5);
console.log(10>5);
console.log(10<=5);
console.log(10>=5);

// string and Number Comparison
// when comparison, string is converted to number
console.log(10=="5");
console.log(10=="10");
console.log(10!="5");
console.log(10!="10");
console.log(10<"5");
console.log(10<"10");
console.log(10>"5");
console.log(10>"10");
console.log(10<="5");
console.log(10<="10");
console.log(10>="5");
console.log(10>="10");

//Boolean and Number Comparison
// true=1 , false=0  ""=0
console.log(true==1);
console.log(true=="1");
console.log(true== 0);
console.log(false==1);
console.log(false==0);
console.log(false=="0");

console.log(true!=1);
console.log(true!="1");
console.log(true!= 0);
console.log(false!=1);
console.log(false!=0);
console.log(false!="0");

// string comparison

console.log("z" > "a");
console.log("raise" > "race");
console.log("break" > "brake");
console.log("lose" < "loose");

//Case matters in String comparison
console.log("A"=="a");
console.log("a">"A");
console.log("book">"Book");

//Strict Equality and non-equality

console.log( 1 == "1");
console.log( 1==="1");

console.log( 1 == true);
console.log( 1===true);

console.log( 1 != "1");
console.log( 1 !=="1");

//null vs undefined


// null in the equality is not converted to number
// null in the comparison is converted to number
console.log(null==0);
console.log(null===0);
console.log(null>0);
console.log(null<0);
console.log(null>=0);

// undefined only equals null
console.log(null==undefined);
console.log(null===undefined);

console.log(undefined==0);
console.log(undefined===0);
console.log(undefined>0);
console.log(undefined>=0);

// null equals 0 in math operations
//undefined does not have a value to take part in a math operation
console.log(null+1);
console.log(undefined>0);
console.log(undefined+1);


// Logical Operator
// OR || 

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

console.log(1||1);
console.log(1||0);
console.log(0||1);
console.log(0||0);

// if all true , returns the first true
// if all false, returns the last false
// if mixed , returns the first true 

console.log(true||1);
console.log(1||true);
console.log(false||0);
console.log(0||false);
console.log(true||0);
console.log(false||1);
console.log(1||false);
console.log(0||true);

console.log(1||false||0);
console.log(0||false||true);
console.log(false||1||true);

// 0, null, undefined, empty string and false are false values. 
//Positive integer, Negative integer, a string and true are true values
console.log(1||null);
console.log(0||null);
console.log("muaz"||null);
console.log("Muaz"||"david");
console.log(undefined||null);
console.log(0||undefined);
console.log(null||undefined||0);
console.log(1||3);
console.log(0||-5);
console.log(5||null);

// example:

let s1;
true || (s1=10);
console.log(s1);

null || ( s1=10);
console.log(s1);



// Logical Operator
// AND &&

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(1&&1);
console.log(1&&0);
console.log(0&&1);
console.log(0&&0);


// if all true , returns the last true
// if all false, returns the first false
// if mixed , returns the first false 

console.log(true&&1);
console.log(1&&true);
console.log(false&&0);
console.log(0&&false);
console.log(true&&0);
console.log(false&&1);
console.log(1&&false);
console.log(0&&true);

console.log(1&&false&&0);
console.log(0&&false&&true);
console.log(false&&1&&true);


//0, null, undefined, empty string and false are false values.
// Negative integer, positive integer, a string and true are true values

console.log(1&&null);
console.log(0&&null);
console.log("muaz"&&null);
console.log("Muaz"&&"david");
console.log(undefined&&null);
console.log(0&&undefined);
console.log(null&&undefined&&0);
console.log(1&&3);
console.log(0&&-5);
console.log(5&&null);

// example:

let s2;
true && (s2=10);
console.log(s2);

null && ( s2=10);
console.log(s2);

// Logical Operator
// NOT !

console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!"Muaz");
console.log(!-5);
console.log(! null);
console.log(! undefined);

// Double !!
// !! true = true 







