// how to iterate object
const person = {
    name : "iqra",
    age : 21,
   " person hobbies" : [ "football","tennis" , "basketball" ,]

}
// for(let key in person){
// console.log( key ,":" , person[key]);
// }
// Object.key
// console.log (Object.keys (person));
// const val=Array. isArray((Object.keys(person)));
//  console.log(val);
for(let key of Object.keys(person)){
    console.log(person[key]);
}


