// lexical/global scope
const myVar= "vale2";

function myapp(){
    // const myvar1= "vale2";

function myfunc(){
    // const myvar = "value45";
    console.log("inside myfunc", myVar);
}

console.log(myVar);
myfunc();

}
myapp();