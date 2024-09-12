// Callback Hell
// When multiple asynchronous operations are chained together, it can lead to deeply nested callbacks, known as "callback hell." 


// Simulate asynchronous operations with setTimeout 3 Operations.......

// function firstOperation(data, callback) {
//     setTimeout(() => {
//         console.log("First operation done with data: " + data);
//         callback(data + 1);
//     }, 1000);
// }

// function secondOperation(data, callback) {
//     setTimeout(() => {
//         console.log("Second operation done with data: " + data);
//         callback(data + 1);
//     }, 1000);
// }

// function thirdOperation(data, callback) {
//     setTimeout(() => {
//         console.log("Third operation done with data: " + data);
//         callback(data + 1);
//     }, 1000);
// }

// // Using nested callbacks
// firstOperation(0, (result1) => {
//     secondOperation(result1, (result2) => {
//         thirdOperation(result2, (result3) => {
//             console.log("All operations done, final result: " + result3);
//         });
//     });
// });






// firstFunction(function(result1) {
//     secondFunction(result1, function(result2) {
//         thirdFunction(result2, function(result3) {
//             console.log("Final result: " + result3);
//         });
//     });
// });
// This can be improved with Promises or async/await syntax, which helps to avoid callback hell and makes the code more readable.





// let age = 20;
// if(age > 10){
//     if(age>60){
//         console.log("need to death")
//     }else if(age = 21){
//         console.log("need of jobs")
//     }else {
//         console.log("students")
//     }
// }


