let newbtn = document.createElement("button");

newbtn.innerText="press me";
console.log(newbtn);
let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
div.after(newbtn);
