// reduce
let names = ["iqra","ali"];
let result = 
names.reduce(function(allnames,names){
    return allnames + " " + names;
 } , "");
 console.log(result);