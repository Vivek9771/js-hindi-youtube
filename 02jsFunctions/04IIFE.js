// Immedietly Invoked Function Expression

// function chai(){
//     console.log(`DB Coneected`);
// }
// chai()

// global scope k pollution se kaafi baar problem hota hai usse hatane k liye IIFE ka use kiya


(function chai(){
    console.log(`DB Coneected`);
})();
// use ; for stopping this iife execution      // these are Named IIFE ..function chai ,tea

(function tea(){
    console.log(`DB is connected here`)
})();



//unnamed iife
((name) => {              //arrow function
     console.log(`database connected in ${name}`);
})("vivek");

