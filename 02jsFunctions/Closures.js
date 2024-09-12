// Clousera- A closure gives you access to an outer function's scope from an inner function.
// Scope access - all variables, functions ,properties access also.

// >> In JavaScript, closures are created every time a function is created, at function creation time.

// LEXICAL SCOPING -

// function init() {
//   let name = "Mozilla";

//   //console.log("display1" ,a);  // cant access  inner function variable..

//   function displayName() {
//     let a = 5;
//     // displayName() is the inner function, that forms the closure
//     console.log("display1" ,name);
//     console.log("display1" ,a);
//   }
//     function displayName2() {
//       // displayName() is the inner function, that forms the closure
//       console.log('display2 ', name);
//   }
//   displayName();
//   displayName2() ;
// }
// init();



// >> The scope is determined when the code is written, not when it is executed. 
//   inner functions contain the scope of their parent functions even if the parent function has returned.
// Closure scope chain
// Every closure has three scopes:

// 1 -  Local scope (Own scope)
// 2 -  Enclosing scope (can be block, function, or module scope)
// 3 -  Global scope



// Closures are a fundamental concept in JavaScript that allow a function to retain access to 
//  lexical scope even after the function that created the scope has finished executing. 
//  This means that inner functions can remember and access variables from their 
//  outer (enclosing) functions even after those outer functions have returned.

// CLOSURES -

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();





// function x(){
//     var a=7;
//     let b =6;
//     function y(){
//         console.log(a);
//         console.log(b);
//     }
//     console.log(a);
//     console.log(b);
//     y();  
// }
// x();



function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12




