function dog(call){
    setTimeout(()=>{
        console.log("jack dog");
        call();
    },2000);
}
function cat(){
    console.log("rose cat");
}
dog(cat);

function attendance(callback){
    console.log("attendance is marked");
    callback();
}
function lunch(callback){
    console.log("lunch time");
    callback();
}

function goinghome(callback){
    console.log("going to home");
    callback();
}
function daycompleted(callback){
    console.log("day completed");
    
}

attendance(()=>{
    lunch(()=>{
        goinghome(()=>{
           daycompleted();
        });
    });
});


//promise function

function brain(){
    return new Promise((resolve,reject)=>{
        resolve("brain active");
        reject("brain dead");
    })
}
brain().then(output=>console.log(output)).catch(output=>console.error(output));

