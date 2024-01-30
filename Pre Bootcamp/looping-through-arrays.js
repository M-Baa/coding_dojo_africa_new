// first one : 
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// second one : 
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    var sum = numbers[i] + i;
    console.log("Number:", numbers[i], "Index:", i, "Sum:", sum);
}

// third one : 
var numbers = [1, 6, 2, 8, 3, 10, 4, 7];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}

// forth one :
var numbers = [1, 6, 2, 8, 3, 10, 4, 7];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    } else {
        numbers[i] = "No dice";
    }
}

console.log(numbers); 