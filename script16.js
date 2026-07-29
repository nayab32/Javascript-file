//objec 
let student = {
    name: "iqra",
    age: 21,
    introduce: function(){
        console.log("my name is "+ this.name +  " my age is " +  this.age);
    }
}; 
student.introduce();