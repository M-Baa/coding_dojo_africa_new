//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.
function swap(arr){
    if (arr.length  <2){
        console.log("the array must have a minimum length of 2");
        return arr;
    }
    [arr[0],arr[arr.length-1]]= [arr[arr.length-1],arr[0]];
    return arr;
}