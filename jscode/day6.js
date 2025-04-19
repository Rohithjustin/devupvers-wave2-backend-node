// for ( let i =0;i<10;i++){

//     console.log(`count ${i}`)
// }
// let i=0;
// while (i<10){
//     console.log(`count ${i}`)
//     i++;
// }

// do {
//     console.log(`count ${i}`)
//     i++; 
// } while(i<=10);

// const display = () =>{
//     console.log("hello")
// }
// display()
let num = [1,2,3]

// let doubled = num.map(n=>n*2);
// console.log(doubled)

//  let  even = num.filter(n=> n % 2 === 0)
//  console.log(even)


let sum = num.reduce((count, val)=> count +val ,0);

console.log(sum)
