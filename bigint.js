//big int datatype
//2^53-1 = 9007199254740991
let limit=900719925470991n;
console.log(limit + 1n);//correct
console.log(limit + 2n);//wrong
console.log(limit+  3n);//correct
console.log(typeof limit);
let p=1236547888888888n;
p=p+2024n;
console.log(p);

//2 ways of declaring big int 
let a=BigInt(123654);
console.log(a);