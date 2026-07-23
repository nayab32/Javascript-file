// class keyword
class person {
    constructor(name) {
        this.name = name;    
}
greet() {
    console.log("hello" + this.name); 
}
}
let person1 = new person("iqra");
person1.greet();