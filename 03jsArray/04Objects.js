// const tinderUser = new Object() // singleton object
  const tinderUser = {}            //non singleton object .. both o/p same
// console.log(tinderUser)           //o/p = {}

tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser) 

const regularUser = {
    email :"viv@gmail.com",
    fullName :{
userfullName : {
    firstName : "vivek",
    lastName : "Rajput"
}
    }
    }
// console.log(regularUser.fullName.userfullName.firstName);
// console.log(regularUser.fullName);
// console.log(regularUser);

const obj1 = {1: "a" , 2 : "b"} 
const obj2 = {3: "c" , 4 : "d"} 
 
//const obj3  = {obj1,obj2}    // o/p =  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = {5: "e" , 6 : "f"} 

// const obj3 =  Object.assign({},obj1 , obj2, obj4)  //you can use empty obj {} ..by this syntax we add more than 2
                                                     // {} ye na ho to saari value real m obj1 m jaati h 2,4, sabki
const obj3 = {...obj1,...obj2,...obj4}    //dots(. will be 3) mostly used  

// console.log(obj3);                               

const users = [
    {
        id : 1,
        email : "vr94@gmail.com"
    },
    {
        id : 2,
        email : "vr@gmail.com"  
    }
]
users[1].email
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //no too use

// console.log(tinderUser.hasOwnProperty('isLogged'));

//tinderuser ki sari keys ko liya array m rakh diya..kis method par run karna h()>>tinderuser


