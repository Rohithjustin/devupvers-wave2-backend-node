// const arr1=[1,2,3]
// const arr2 =[...arr1,4,5,6,7]
// console.log(arr2)


// rest operator


// function add(...arr1){
//     console.log(typeof arr1)
//     return arr1.reduce((a,b)=>a+b);
// }

// console.log(add(1,2,3,5,5,6,6))


// try{

//     let a =5 ,b=0;
//     let c=a/b;
//     throw new Error("customer error")
    
// }
// catch(err){

//     console.log(err.message)
// }


let prpmise = new Promise((resolve, reject) => {
    let success =true;

    success?resolve("done"):reject("error");
})
console.log(prpmise)
    