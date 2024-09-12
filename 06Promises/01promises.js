// // A Promise is in one of these states:    promise is an Object

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.....resolve()
// // rejected: meaning that the operation failed..........................reject()



// const promiseOne = new Promise(function(resolve, reject){
//    //we holding this in promise in One variable..also can write direct new promise...

// setTimeout (function(){
// console.log ('async task is complete');
//   resolve()
// },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })



// // promise apne andar callback leta h..or le skta hai again and again
// // An anonymous function in JavaScript is simply a function that does not have a name. Instead 
// // of defining a function with a name like function myFunction() { ... },
     


// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("async Task");
//     resolve()

//   },1000)
// }).then(function(){
//   console.log("async 2 resolved");
// })



// const promiseThree = new Promise (function(resolve, reject){
//   setTimeout(function(){
//     resolve({username: "chai", email: "chai@example.com"
//   })
// }, 1000)
// })
// promiseThree.then(function(user){
//   console.log(user);
// })
//.then kar diya matlb resolve or .then ka connection h.



// const promiseFour = new  Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = true
//     if (!error){
//       resolve({username : "vivek" , password: "123"})
//     }else{
//       reject('error: something went wrong')
      
//     }
//   }, 1000)
// })


// //part of promiseThree
// promiseFour
// .then((user)=> {
//   console.log(user);
//   return user.username
// }).then((username) => {
//   console.log(username);
// }).catch(function(error){  // because of error comes "true" thts y use .catch
//   console.log(error);
// }).finally(() => console.log("the promise is either resolve or reject"))



// //we also can use async await in promise at the time to database connectivty
// const promiseFive = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = true
//     if (!error){
//       resolve({username : "javascript" , password: "123"})
//     }else{
//       reject('error: something went wrong')
      
//     }
//   }, 1000)
// })


// //part of promiseFive
// async function consumePromiseFive(){
// try{
//   const response  = await promiseFive
//   console.log(response);
// }catch (error){
//   console.log(error);
// }
// }
// consumePromiseFive()


//...............................................................................................................................................






// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise");
//  resolve("occured");
// //reject("not occured")
// });






// function getData(dataId,getNextData){
//   return new Promise((resolve, reject) =>{        // It returns a new Promise object. 
//     setTimeout(()=>{
//       console.log("data" , dataId);
//       resolve("success");
//       if(getNextData){                  //If getNextData is provided (not null or undefined), it calls getNextData().
//         getNextData();
//       }
//     },4000);
//   } );
// }
// // Chain calls to getData....Callback hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//         console.log("All data fetched");
//     });
//   });
// });




// ..........................................by using promise chain


function getData(dataId){
  return new Promise((resolve, reject) =>{        // It returns a new Promise object. 
    setTimeout(()=>{
      console.log("data" , dataId);
      resolve("success");
    },3000);
  } );
}

// Promise Chain

getData(1)
 .then((res) =>{
  return getData(2);
  }) 
 .then((res)  =>{
  console.log(res);
 })

// different type to write promise chain

//  getData(1).then((res) =>{
//  console.log(res);
//   getData(2).then(() =>{
//     console.log(res);
//   }) ;
//  })





// const getPromise = () =>{
//   return new Promise((resolve, reject) =>{
//     console.log("i am a promise");
//     //resolve("success");
//     reject("error");
//   });
// };

// let promise = getPromise();
// // promise.then((res) =>{
// //   console.log("promise fullfilled" ,res);
// // });
//  promise.catch((rej)=>{
//   console.log("rejected" , rej)
//  });





//learn promise chain method

// function asyncfunction1() {
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       console.log("data1");
//       resolve("success");
//     },4000);
//   });
// }

// function asyncfunction2(){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//       console.log("data2");
//       resolve("sucess2");
//     },4000);
//   });
// }

// // Promise Chaining

// console.log("fetching data1......");
// let p1 = asyncfunction1();
// p1.then((res)=>{
//   console.log(res);
//   console.log("fetching data2........");
//   let p2 = asyncfunction2();
//   p2.then((res) =>{
//     console.log(res);
//   });
// });



