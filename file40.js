// object inside array

const users = [
    {userId: 1 , firstName: 'iqra', gender: 'female'},
    {userId: 2 , firstName: 'ali', gender: 'male'},
    {userId: 3 , firstName: 'anum', gender: 'female'},
];
for(let user of users){
    console.log(user.userId);
}