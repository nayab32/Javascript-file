// Delete
fetch("https://reqres.in/api/users/2",{
    method: "DELETE"
})
.then(response =>{
    console.log("post deleted successfully");
})

  .catch(error =>console.log(error));