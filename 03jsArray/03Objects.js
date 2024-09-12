//singleton >> when we make object using Literals Singleton not form...form only when make obj using constructor

//Object.create  ...through constructor method

// object literals

const  mySym = Symbol("key1")

const Juser ={
    name :  "vivek" ,               //bydefault name jo lihka h vo "name" h string h 
// keys & values...all are defined by u
    "full name" : "vivek rajput",   //now you can access this through dot (.)
    [mySym] :"mykey1",  //[] for symbol
    age : 23,
    location : "jaipur",
    email : "vr@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon" , "Sat"]
}
  //console.log(Juser);

//  console.log(Juser.email);
//  console.log(Juser[email]);    //error bc not get email as 
//  console.log(Juser["email"]);        //email string h "email"
//  console.log(Juser["full name"]); 
// // console.log(typeof Juser.mySym);  // string type but we want (SYMBOL) datatype
//  console.log(Juser[mySym]);

 Juser.email = "vivek@gmail.com"
 //console.log(Juser);       // update mail
  Object.freeze(Juser)       // .freeze  no change in object...........
 Juser.email = "vivekkkkkkkkk@gmail.com"
// console.log(Juser);  

 Juser.greeting = function(){
    console.log("Hello js user");
 }
 Juser.greetingTwo = function(){
    console.log('hello js user , ${this.name}');
 } 
 //console.log(Juser.greeting());
//console.log(Juser.greetingTwo());


 obj = {
   "name"  : "vivek"
}
console.log(obj["name"]);