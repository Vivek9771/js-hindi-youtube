const accountId = 1442              // cant be change
let accountEmail = "vivek@gmail.com"     // can be change
var accountPassword = "5494654"       // can be change
accountCity = "jaipur"                  // can be change

/*
prefer not to use var because of issue
in block scope and functional scope
 */
    
 // accountId = 55  // const cant be change..

 console.log(accountId);

 accountEmail = "viv2g.com"
 accountPassword = "0320"
 accountCity = "Chennai"

 console.log(accountPassword);
 console.table([accountEmail,accountId,accountPassword,accountCity])
