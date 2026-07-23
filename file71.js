// prototype
// let person ={
//     name: "iqra",
// };
// let student=
// Object.create(person);
// console.log(student.name);


// let person={
//     greet:function(){
//         console.log("hello ");
//     }
// };
// let student=
//     Object.create(person);
//     student.greet();


    // proto.prototype
    function person(){
        person.prototype.greet(){
            console.log("hello");
        }
    };
let person1 = new person();
person.greet();
