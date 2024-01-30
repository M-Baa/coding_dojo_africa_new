var riderHeight = 42 ; // the rider  must be at least 42 inches
var riderAge = 10 ; // the rider must be over the age of 10years old

if (riderHeight>= 42){
    
    console.log("Get on that ride,kiddo");
}

console.log("Sorry kiddo.Maybe next year");
// Feature 1 :

if (riderHeight>= 42  && riderAge>=10){
    console.log("Get on that ride,kiddo");
}

console.log("Sorry kiddo.Maybe next year");

 // Feature 2 : 

if (riderHeight>= 42 || riderAge>= 10 ) {
    console.log("Get on that ride,kiddo");
}

console.log("Sorry kiddo.Maybe next year");