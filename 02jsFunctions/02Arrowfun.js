// basic sa ek object banate hai
const user  = {
    username : "vivek",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`);

    //   console.log(this);   // this current values dilhata h isme 
    }

}
// user.welcomemessage()          //this k sath
// user.username= "sam"
// user.welcomemessage()

// console.log(this);  // o/p >>>>{}    ek empty object


// this only in object not in function...............

// function chai(){
//     let username = "vivek"
//     console.log(this.username);  
// }
// chai()   //undefined output


// const chai = function(){
//    let username = "vivek"
//    console.log(this.username); 
// }
// chai()   //undefined


const chai =() =>{ 
   let username = "vivek"
   console.log(this.username); 
}
//chai()


// const addTwo =(num1 , num2) =>{
//     return num1 + num2
// }

// if use {} need to write return  // IMPLICIT return

// const addTwo =(num1 , num2) => (num1 + num2)

const addTwo =(num1 , num2) => ({username : "vivek"})

console.log(addTwo(2,3));


// const myarray  = [2,3,4,9,6]

// myarray.forEach()

