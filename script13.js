let btn1 = document.querySelector("#btn1");   //handling button event


btn1.onclick = ()=>{
    console.log("btn1 was clicked");
    let a= 43;
    a++;
    console.log(a);
}

let div = document.querySelector("div"); // handling div event

div.onmouseover = ()=>{
    console.log("you are inside div");
}
