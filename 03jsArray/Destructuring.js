//>>Destructuring > Extracting out the values from arrays and objects calles destructuring.
// let bagpack = {
//     itm1: "torch",
//     itm2: "food",
//     itm3: "water",
//     itm4: "bike",
//     itm5: "rope"
// };

// console.log(bagpack.itm2);   // Output: "food"

// // Object Destructuring to extract itm1 and itm2
// let { itm1, itm2 } = bagpack;
// console.log(itm1);            // Output: "torch"

// // Correct way to define a function in an object
// let itm7 = () => {
//     console.log("umbrella");
// };

// // Adding itm7 to the bagpack object
// bagpack.itm7 = itm7;

// console.log(bagpack.itm7); // Output: [Function: itm7]

// bagpack.itm7(); // Output: "umbrella"



//defaultly give name by urself
// let arr = ["torch", "food", "water", "clothes", "alcohol"]

// let [a,b,c,d] = arr
// console.log(d)


// let arr = ["torch", "food", "water", "clothes", {
//     menu1: "sweet",
//     menu2: "namkeen"
// }];
// let [a, b, c, d, { menu1, menu2 }] = arr;
// console.log(c)
// console.log(arr);
