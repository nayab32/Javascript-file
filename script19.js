//constructor
class Pizza {
    constructor(flavor, size){
        this.flavor = flavor;
        this.size= size;

    }
    showPizza (){
        console.log("flavor " +  this.flavor);
          console.log("size " +  this.size);

    }
}

let Pizza1 = new Pizza("pepperoni", "large");
Pizza1.showPizza();