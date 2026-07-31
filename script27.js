//Asyn await
function getData(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data loaded");

        }, 2000);
    });
}
async function showData() {
    console.log("loading...");
    let result = await getData();
    console.log(result);

    
}
showData();