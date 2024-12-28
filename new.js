
let stu=new Object();
stu.name="sathish";
stu.age=20;
stu.hel=function(){
    console.log("hello");
}
stu.hel();
console.log(stu);
console.log(stu.name);
console.log(stu.age);

let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

console.log("Sum: "+ sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

let x = 10;
let y = 20;

console.log("x > y: " + (x > y));
console.log("x < y: " + (x < y));
console.log("x >= y: " + (x >= y));
console.log("x <= y: " + (x <= y));
console.log("x == y: " + (x == y));
console.log("x !== y: " + (x !== y));

let p = true;
let q = false;

console.log("p && q: " + (p && q));
console.log("p || q: " + (p || q));
console.log("!p: " + (!p));
console.log("!q: " + (!q));

let m = 5; // 0101 in binary
let n = 3; // 0011 in binary

let and = m & n;
let or = m | n;
let xor = m ^ n;
let notM = ~m;
let leftShift = m << 1;
let rightShift = m >> 1;
let unsignedRightShift = m >>> 1;

console.log("m & n: " + and);
console.log("m | n: " + or);
console.log("m ^ n: " + xor);
console.log("~m: " + notM);
console.log("m << 1: " + leftShift);
console.log("m >> 1: " + rightShift);
console.log("m >>> 1: " + unsignedRightShift);

let c=5;
let d=c++ + --c;
let e=++d + d++;
c++;
console.log("\n",c,"\n",d,"\n",e);
