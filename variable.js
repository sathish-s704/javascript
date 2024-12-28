 //variable declration
let bookname;
//variable ininitialisation
bookname="Harry Potter";

let author="J.K.Rowling";
let publisher="sathish";
let a="jk",b="pk";

console.log(bookname,"\n",publisher,"\n",b);

bookname="hp";
console.log("\n");
console.log(a);
console.log(bookname,"\n",publisher,"\n",b); 
//rules for naming variable
/*
unique name(no recreate of variable in same name)
only 2 special character are allowed $ _
start with alphabet or underscore or dollar symbol
keywords cannot be used as a variable name 
case sensitive
*/
let student ,nam;
nam="sathish";
student=nam;
console.log(student);

const NAME="sath";
NAME="codeio";//hard coded values
console.log(NAME);

const DATE_OF_BIRTH="19.04.2004";
const age=calAge(DATE_OF_BIRTH);
