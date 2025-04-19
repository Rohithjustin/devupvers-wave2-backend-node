// const prompt = require('prompt-sync')();

// const name = prompt("Enter your name: ");
// console.log(`Hello, ${name}!`);

//  let name = "rohith " , age =22;
//  console.log(`${name} is ${age} year old`)

// if(age>18){
//  console.log(`eligible ${age}`)
// }


function finalValue(p,t,a) {
    let total = p*(1+t*a/100);
    return total;
}

const prompt = require('prompt-sync')();
let p = prompt();
let t = prompt();
let a = prompt();
console.log(finalValue(p,t,a));