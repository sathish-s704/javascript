let isadult;
let age=10;
if(age>=19){
    isadult=true;
}
else{
    isadult=false;
}
console.log(isadult);

let person=(age>=18)?"adult":"child";//conditional operator
console.log("person ",person);

if('0'){
    console.log("hi");
}

//leap year finding

let year=1900;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(" leap year");
        }
        else{
            console.log("not a leapyear");
        }

    }
    else{
        console.log("not a leapyear");

    }

}
else{
    console.log("not a leapyear");
}


if(year%4==0 && year%100==0 && year%400==0){
    console.log("leap year");
}
else{
    console.log("not a leapyear");
}