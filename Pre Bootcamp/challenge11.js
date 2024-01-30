//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
function maxMinAvg(arr){
var max= arr[0];
var min= arr[0];
var sum= arr[0];

for (var i=1;i<arr.length;i++){
    
    if (arr[i]>max){
        max=arr[i];
    }
    if (arr[i]<min){
        min = arr[i];
    }
    sum = sum + arr[i];
}



var avg = sum/arr.length;
var arrnew =[max,min,avg];
    return arrnew;
}