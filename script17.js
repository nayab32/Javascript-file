//Class

class Employee{
    constructor(name , job){
        this.name = name;
        this.job = job;
    }
    intro(){
        console.log("name: " + this.name);
        console.log("job: " + this.job);
    }
}
let emp1 = new Employee("iqra", "web developer");
emp1.intro();