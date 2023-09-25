// function addTwoNum(num1,num2)
// {
//     console.log(num1+num2);
// }
// addTwoNum(5,6);

function addTwoNum(num1,num2)
{
    return num1+num2;
}
console.log(addTwoNum(5,6));

//rest operator
function calculateCartPrice(...number)
{
    return number;
}
console.log(calculateCartPrice(13,334,433,6764,564));

//pass object in function
const user={
    username:"Neelam",
    id:12345
}
function objectpass(anyobject){
    console.log(`username is ${anyobject.username} and id is ${anyobject.id}`);
}
objectpass(user);
