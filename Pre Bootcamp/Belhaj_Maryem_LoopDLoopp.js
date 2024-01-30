// 1) loop is needed to continuously monitor the distance covered by the runner on the treadmill and determine when to dispense a piece of candy.
// 2)  the loop will continue as long as the condition currentDistance < 6 is true. 
// 3) The loop  should stop when the currentDistance becomes greater than or equal to 6 miles.
// 4) the loop stops when the specified condition is no longer true, indicating that the runner has covered 6 miles or more on the treadmill.
// 5) the increment would depend on the data you receive from the treadmill.// 2++ 
// 6) we need this variable called currentDistance


var currentDistance = 0;
var candyGiven = 2;
var speed =6;
while (currentDistance<6){
if (currentDistance % candyGiven == 0 && speed>5.5){
  console.log("Give him a candy");
}
currentDistance += 2;
}

console.log("Stop giving candy; you reached 6 miles.");123456789
