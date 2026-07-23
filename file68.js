// optional chaining

let person = {
    name: "iqra",
    age: 21,
}
console.log(person.age.gender);

let user={
  
    name: "ali",

    address: {
        city: "peshawar"
    }
};
console.log(user.address?.city);