//Event listener
btn1 .addEventListener("click",() =>{
    console.log("button1 was clicked -handler1");
});

// btn1 .addEventListener("click",(evt) =>{
//     console.log("button1 was clicked");
//     console.log(evt, evt.type);
// });

btn1 .addEventListener("click",() =>{
    console.log("button1 was clicked-handler2");
});
const handler3=() =>{
     console.log("button1 was clicked-handler3");
};
btn1 .addEventListener("click",handler3);
   


btn1 .addEventListener("click",() =>{
    console.log("button1 was clicked-handler4");
});
btn1.removeEventListener("CLICK",handler3);
   
