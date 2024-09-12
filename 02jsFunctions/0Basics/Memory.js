//  Stack(primitive)  and Heap(non-primitive)

/* stack memory m copy banati h..ek baar jo value aa gyi uski agr again use ki to only
uski copy milegi or usse change kar skte ho but original value change nhi hogi.
 
like--myChannel next time m sirf copy mili.

Heap m value change hoti h..
 */

let myChannel = "vivek@.com"

let anotherName = myChannel
 anotherName  = "newChannel"

console.log(anotherName);
console.log(myChannel)

let user1 = {                      // variable declare stack m hi hai (stack1,stack2) but value jo hai vo HEAP se reference le rha h dono
    email: "user@gmail.com",
    upi:"user@ybl"
}
let user2 = user1   
 
user2.email  =  "vk@gmail.com"   //imp // dot k sath excess kar skte h OBJECT m....esi email , upi etc..jesi esi properties.

console.log(user1.email);
console.log(user2.email);  // both have same value due to reference