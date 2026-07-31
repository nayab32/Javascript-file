// callback

function sum(a, b){
    console.log(a+b);
}
function calculator (a, b , sumcallback){
    sumcallback(a,b);
}
calculator(6,9, sum);

