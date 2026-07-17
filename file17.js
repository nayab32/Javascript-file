let winningnumber= 13;
let userguess = + prompt("guess number");
console.log(typeof userguess, userguess );
if(userguess === winningnumber){
    console.log("your guess is right");
}
else{
    if(userguess < winningnumber){
        console.log("too low");
    }
    else{
        console.log("too near");
    }
}