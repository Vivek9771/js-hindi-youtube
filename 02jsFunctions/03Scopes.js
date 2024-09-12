// let a = 10
// const b = 20
// var c = 30              //{} yahi scope h yaha 

var c = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner" , a);
}
// let only scope k andar execute hoga but var bahar bhi ho jata h thsts the problem

// console.log(a);
// console.log(b);

// console.log(c);


// here is clousre concept where child can access parent 

function one () {
 const username = " vivek"
 
 function two (){
    const website = "youtube"
    console.log(username);
    console.log(website);
 }
 //  console.log(website);  // error

   two()
}
//  one()

if(true){
    const username = "vivek"
    if (username === "vivek"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);    // error 
}
 // console.log(username);    // error 

//++++++++++++ interesting ++++++++++++++++++
//M1

// console.log(addone(4))
function addone(value){
    return value + 1  
}
// console.log(addone(4))

// call before/after the declaration

//M2

 //console.log(addtwo(5));
const addtwo =  function(num){
    return num + 2
} 
// console.log(addtwo(5));

// call print only after the declaration

