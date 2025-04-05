let arr = ['apple','banana','apple','orange','banana','apple'];

let fun = arr.reduce((count,fruit)=>{
    count[fruit] = (count[fruit] || 0) + 1;
    return count
},{})

console.log(fun);
