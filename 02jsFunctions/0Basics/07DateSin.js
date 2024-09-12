//Date

let myDate  = new Date()
 new Date()
// console.lo
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);  //object hai

let myCreateddate  = new Date(2023, 3 ,27)  // or "01-06-2023"

// console.log(myCreateddate.toString());
// console.log(myCreateddate.toLocaleDateString());
// console.log(myCreateddate.toLocaleTimeString());

let myTimeStamp  =  Date.now()

// console.log(myTimeStamp);  // mili second value

// console.log(myCreateddate.getTime()); //time between these two in ms

// console.log(Math.round(Date.now() / 1000)); //seconds  // 1000 se divide karne pae decimal value thatrs why we use(Math)

let newDate =g(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());

'${newDate.getHours()} and the time'

newDate.toLocaleString('default',{
    weekday: "long",//more..
})

//we can define many parameters in LocalString() method

//ctrl + space