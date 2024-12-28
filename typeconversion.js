let age=23;
console.log(typeof age);
age=String(age);
console.log(typeof age);
console.log(age);

let isadult=true;
isadult=String(isadult);
console.log(typeof isadult);
console.log(isadult);

let x='0';
console.log(typeof x);
x=Boolean(x);
console.log(typeof x);
console.log(x);

let y='12',z='6';
let m=y+z;
console.log(m);


let y1='12',z1='6';
let m1=Number(y1)+Number(z1); // we use same as unary + operator
console.log(m1);

let y2='12',z2='6';
let m2=+y2+ +z2; 
console.log(m2);

let v=0;
console.log('0'==0);//automatically convert into number datatype
console.log('0'===0);//strict equality no type conversion is done

let s='0';  //"0 "contains something means it return true
s=Boolean(s);
console.log(s);


let s1='';  //" "contains nothing means it return false 
s1=Boolean(s1);
console.log(s1);

console.log(null==undefined);//it always print true becasue it is already seted.
