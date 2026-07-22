// block scpe and function scope (while using var we can run function also in other blocks)


// {
//     let firstname = "iqra";
//     console.log(firstname);
// }
// {
// let secondname = "nayab";
// console.log(secondname);
// }
{
    var firstname = "iqra";
    console.log(firstname);
    
}
{
 console.log(firstname);
}
