//for Of loop

const num = [1,2,3,4,5];
for (const i of num) {
    console.log(i);
}

//for In loop for objects
const myLang ={
    js : "Javascript",
    cpp : "c++",
    rb : "Ruby"
}
for (const j in myLang) {
   //console.log(j);
   console.log(`${j} is shortcut for ${myLang[j]}`);
}

//forEach loop
const number = [1,2,3,4,5]
number.forEach(function (val) {
 console.log(val);
})
