// nested destructuring

const users = [
    {userId: 1 , firstName: 'iqra', gender: 'female'},
    {userId: 2 , firstName: 'ali', gender: 'male'},
    {userId: 3 , firstName: 'anum', gender: 'female'},
];
// const[user1 , user2 , user3]= users;
const[{firstName} ,  , {gender}]= users;
console.log(firstName);
console.log(gender);