// functions >> jo bhi code h vo ek package m h usse jaha use ho vaha le jaa skte ho.

// function is a block of code designed to perform a specific task and can be ...Reused...throughout the program.
//allows us to write efficient and modular code.
// it makes the code more readable and easier to understand.
// it executes when someone calls it.

//>> they can be assigned to variable,passed arguments to other functions,and returned from functions. 

function sayMyname(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}
// sayMyname()                   //this is function call




// function addtwonumbers(number1 , number2){    // parameters 
//     console.log(number1+number2);
// }
// addtwonumbers(3 ,6);                          // arguments pass at calling time
//  addtwonumbers(7,"5");
//  addtwonumbers(2,null);





function addtwonumbers(number1, number2) {
    let resultsum = number1 + number2;
    console.log("hello")
    return resultsum;
    console.log("hello")               // do not print after return inside the function          
  }

 // console.log( result = addtwonumbers(6 , 5));             // return wale m without console k funcion call par print nhi hoga

//   const result = addtwonumbers(6, 5);
//   console.log("Result:", result);
  





// function returning value

function functionname(){
    //function body
    return expression/value;
}
 //calling function

 let returnValue = functionname();

 // function would be executed and on executing the return statement the value / expression are stored in the returnValue variable..





// function loginUsermsg(username){
function loginUsermsg(username = "sam"){
  {
    if(username === undefined)
    console.log("please enter a username");
    return
    }
    return `${username} just logged name`
}
console.log(loginUsermsg("hitesh"));

console.log(loginUsermsg());        // o/p >> undefined






//Rest Parameter...

function calculateCartPrice(val1, val2 , ...num1){
  return num1;
}
 // console.log(calculateCartPrice(200, 400, 500,700 ))


 function calculateCartPrice(val1, val2, val3, val4, ...num3) {
   return num3;
  }
 // console.log(calculateCartPrice(200, 400, 500, 700, 1000, 1200, 1500));
  

 // val1 and val2 are regular parameters, while ...num1 is a rest parameter. 
 // Rest parameters allow you to represent an indefinite number of arguments as an array.
 // Calls the calculateCartPrice function with arguments 200, 400, 500, and 700.
// The function receives 200 as val1, 400 as val2, and collects 500 and 700 into the num1 array due to the rest parameter.





const user = {
    username : "vivek",
    price : 198
} 
 function handleobject(anyobject){
     //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

  // handleobject(user)

handleobject({                          // Calls the handleobject function with an inline object { username: "sam", price: 399 } as an argument.
    username : "sam",
    price : 399
})





const mynewarray =[200,600,300,100]                    // array taken

function returnSecondValue(getArray){
    return getArray [3]
}

// console.log(newarray);
// console.log(returnSecondValue(mynewarray));             //100
// console.log(returnSecondValue([200,600,300,1000]));     //1000   // ([...........]) otherwise undefined













































