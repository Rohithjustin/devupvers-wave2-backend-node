function finalValue(p,t,a) {
    let total = p*(1+t*a/100);
    return total;
}

const prompt = require('prompt-sync')();
let p = prompt();
let t = prompt();
let a = prompt();
console.log(finalValue(p,t,a));