// console.log("start")


// setTimeout(()=>


// {console.log("time callback")},0)


// console.log("end")


 const EventEmitter = require('events')
 const event = new EventEmitter();


 event.on('hello',(user)=>{
    console.log(`hello ${user}`)
 })


 event.emit('hello',"rohith")
