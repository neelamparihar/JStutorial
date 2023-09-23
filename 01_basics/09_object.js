const person = {
    name:"Neelam",
    email:"neelam@gmail.com",
    password:123456
}

// console.log(person.name);
// console.log(person["name"]);

// const person2 ={
//     id:12345,
//     phone:9775545
// }
// const personinfo = Object.assign({},person, person2);
// console.log(personinfo);
// console.log(Object.keys(personinfo));
// console.log(Object.values(personinfo));
// console.log(Object.entries(personinfo));

const {name,email,password} = person;
console.log(password);