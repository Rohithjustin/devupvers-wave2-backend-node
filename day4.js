// function display()
// // function 1
// {
//     console.log("hello bhasker")
//     displayname()
// }

// // display(function()
// // {

// //     console.log("good morning")
// // })

// function  displayname(){

//     // function 
//     console.log("my frd rohith")
// }

// display(

// )
// clearInterval(id)

let counter =0;
let id = setTimeout(function (){

    console.log(counter);
    counter=counter+1;
    if (counter >5){
        clearInterval(id)
    }

},10000);


    