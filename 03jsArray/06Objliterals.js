//Object literals.....

const car1 = {
    brand : "Audi",          //properties
    miledge : 30,
    fuelcapacity : 1000,
    colour : 'Red',
    highspeed : 390,
    automatic : 'true',

    greetme : function(){    // behaviour 
    console.log("hello this is vivek");
    }
}
//console.log(car1.greetme());

const car2 = {
    brand : "laudi",
    miledge : 30,
    fuelcapacity : 1000,
    colour : 'white',
    highspeed : 390
}
car1.cost = 5000000;  //if you want to add something after making object.
car1.automatic = "false"


// console.log(car1)
// console.log(car2)
// console.log(car1.brand, car2.colour, car1.highspeed);
// console.log(car2['colour']);




// OBject using new keyword..........

// var obj1 = new Object();  // obj1 is created using the new Object() syntax, which explicitly calls the Object constructor. This method creates a new, empty object.



var cardetails  = new Object();
cardetails.brand = "lembo",
cardetails.color = "yellow",
cardetails.automatic = "true" 

cardetails.greetme = function(){     // behaviour 
console.log("hello this is vivek");
}
// console.log(cardetails.greetme() );
// console.log(cardetails );




//by using Constructor object method........

function Course(instructor,title,description,language,duration,fees,startdate ){
   //constructor fun

    this.instructor = instructor;  //not take in " instructor"
    this.title = title;
    this.description = description;
    this.language = language;
    this.duration = duration ;
    this.fees = fees;
    this.startdate = startdate;
}

var javascriptcourse  = new Course(
    "vivek",
    "javacript html css",
    "padhte raho",
    "hinglish",
    12,
    "free",
    "3 may"
)
// console.log(javascriptcourse);



// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances using the Person constructor function
var person1 = new Person('Alice', 30);
var person2 = new Person('Bob', 25);

// Logging the instances to the console
//console.log(person1); // Outputs: Person { name: 'Alice', age: 30 }
//console.log(person2); // Outputs: Person { name: 'Bob', age: 25 }



// Manupulation values in Object....
// > Accessing Data
// > Adding Data
// > Changing Data
// > Deleting Data >>>>

// > Object.keys()     // returns the keys
// > Object.values()   // returns the values
// > Object.entries()  // returns the keys
// > Object.freeze()
// > Object.seal()


function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('Alice', 30);
var person2 = new Person('Bob', 25);

//delete person1.age;     //delete key

//console.log(person1);
//console.log(person2); 

// console.log(Object.keys(person2))
// console.log(Object.values(person2))
// console.log(Object.entries(person2))


//Object.freeze(person1)            // freeze , no change delete  

//Object.seal(person1)            // only update..no delete or add data
person1.company = "microsoft";
person1.age = 23
console.log(person1);