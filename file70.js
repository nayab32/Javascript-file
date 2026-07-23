// call
// let person = {
//     name: "iqra",
// };
// function greet(age){
//     console.log("hello,my name is" + this.name);
//     console.log("my age is" + age);

// }
// greet.call(person,20);

// apply
let person = {
    name: "ali",
}
function greet(age,city){
    console.log("hello, my name is " + this.name);
     console.log("my age is" + age);
    console.log("i live in city " + city );
   
}
 greet.apply(person ,[20,
        
     "Lahore"]);




//     //  bind
     
//     function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2);

// console.log(double(5));

