 // patch
fetch("https://reqres.in/api/users/2",{
    method: "PATCH",
    headers:{
        "content-Type" : "application/json"
    },
    body:JSON.stringify({
        name:"iqra"
        
    })
})

    // })
.then(response =>response.json())
.then(data => console.log(data))
.catch(error =>console.log(error));