

let x=10;
if(x%3==0){
    console.log("hai");
   }
    if(x%5==0){
        console.log("hello");
    }

    switch (true) {
        case (x % 3 === 0):
            console.log("hai");
            break;
        case (x % 5 === 0):
            console.log("hello");
            break;
        default:
            console.log("Neither divisible by 3 nor 5");
    }


    //arrow function
    let apple=()=>console.log("hello");
    apple();

    let orange=()=>"orange";
    console.log(orange());

    let banana=()=>{
        console.log("banana");
        return 3+3;
    }
banana();//it will not return anything
    console.log(banana());

    let sum=(a,b)=>{
        console.log(a+b);
    }
    sum(10,20);