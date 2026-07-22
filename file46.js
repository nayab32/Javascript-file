// FUNCTION inside function

function app(){
    const myFunc = () =>{
        console.log("hello from myfunc")
    }
    const addtwo = (num1, num2) => num1*num2;
    console.log("inside app")
    myFunc();
}
app();