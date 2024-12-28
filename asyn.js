
function attendance(){
    console.log("attendance is marked");
}
function lunch(){
    console.log("lunch time");
}

function goinghome(){
    console.log("going to home");

}
async function finalday(){
    try{
    let att= await attendance();
    console.log(att);
    let lun= await lunch();
    console.log(lun);

    let go= await goinghome();
    console.log(go);
    }catch(error){
        console.error(error);
    }

}


