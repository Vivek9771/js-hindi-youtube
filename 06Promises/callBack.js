
// function hello(){
//     console.log("hello")
// }
// setTimeout(hello,2000)                                 //timeout



// function sum(a ,b){
//     console.log(a+b);
// }
// function calculation(a, b, sumcallback){
//     sumcallback(a ,b);                     //sumcallback is actually a reference to the sum function,sumcallback(1,2) is equivant to sum(1 ,2)

// }
// calculation(1,2,sum);  //function name OR complete function bhi pass kar skte h..

// calculation(1,2,(a,b) => {
//     console.log(a+b);
// })




//Asynchronous Callback Example

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Fetched data");
    }, 2000);
}

function processData(data) {
    console.log("Processing: " + data);
}
fetchData(processData);




// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);




// function hello(name,callback){
//     console.log("hello" + name );
//     callback();
// }
// function sayGoodbye(){
//     console.log("goodbye");
// }
// hello("rahul", sayGoodbye);

























