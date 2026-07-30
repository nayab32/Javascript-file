//Methode

class Teacher {
    constructor(name){
        this.name = name;
    }
    sayhello(){
        console.log("hello, i am " + this.name);
    }
}

let teacher1= new Teacher("iqra");
teacher1.sayhello();