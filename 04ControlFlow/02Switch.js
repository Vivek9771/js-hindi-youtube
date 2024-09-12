// a value checked by multiple conditions..
// for removing if else condition

// switch(key){
//     case value:
//         console.log("xyz")
//         break;
//     default:
//             break;
// }

const month = 3


switch(month){
    case 1:
        console.log("janauary")
        break;
    case 2:
        console.log("feb")
        break;
        
    case 3:
        console.log("march")
        break;               // if we not use break after match the key...all code with execute after this line // except default
    case 4:
        console.log("default case match")    
}

//for strings

const day = "monday"

switch(day){
    case "tue":
        console.log("janauary")
        break;
    case "monday":
        console.log("feb")
        break; 
    case "sun":
        console.log("march")
        break;             
    case "fri":
        console.log("default case match")    
}