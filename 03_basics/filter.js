//filter method

const num = [1,2,3,4,5,6,7,8,9,10]
const ans = num.filter( (num) => num>4)
console.log(ans);

const ans1 = num.filter( (num) => {
    return num>4
})
console.log(ans1);

