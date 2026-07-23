// methode
// function inside an object

// let car = {
//     brand: "BMW",
//     start: function(){
//         console.log("car is starting");
//     }
// };
// car.start();

let person={
    name: "iqra",


greet:function(){
    console.log("hell0 my name " + this.name);
}
};
person.greet();