// spread operator in array
// const array = [1,2,3];
// const array = [4,5,6];
// const newArray=[..."tyui"];
// console.log(newArray);

// spread operator in object 
const obj1 = {
    key1: "value1",
    key2: "value2",

};
const obj2 = {
    key1: " valueUnique",
    key3: "value3",
    key4:  "value4",
};
const newObject = {...obj2, ...obj1};

console.log(newObject);


