
// Destructuring //

//destructuring array or object dono ki hoti hai

const course = {
    coursename : "js in hindi",
    price : "666",
    courseInstructor : "vivek"
}
// console.log(course.courseInstructor);

// const {courseInstructor} =course  
const {courseInstructor : CI} =course         //course object > kaha se value extrsct karni h
//destructure ab sirf ci likhna h courseinstructor ki jagah can change the name.

// console.log(courseInstructor);
console.log(CI);

/* react destructuring concept
const navbar = ({company})=> {

}

navbar(company= "lsg") */

// API concept // >> apna kaam kisi or se karana we get only output not process
//JSON >> {look syntax also}

// {
//     "name" : "vivek",
//     "coursename" :"js in hindi",
//     "price" : "freeze"
// }

// sometimes API get in Array format 

[
    {},
    {},
    {}
]





