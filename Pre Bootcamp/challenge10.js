//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
function noNeg(arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
return arr;
}