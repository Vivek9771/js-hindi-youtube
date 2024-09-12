// Sync in JS (Synchronous) -> Synchronous means the code runs in a particular sequence of instructions given in the program.
//                          -> Each instructions waits for the previous instructions to complete its execution.

// console.log("one")
// console.log("two")
// console.log("three")


// Asynchronous -> Due to synchronous programming , sometimes imp instructions get blocked due to spme previous instructions , which causes a delay in UI.
//                 Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


function hello(){
    console.log("hello")
}
setTimeout(hello,2000) //timeout