function get_array(){
var arr=[];
for ( let  i=1;i<=255;i++){
    arr.push(i);

}
return arr;
}
var resultArray = get_array();
for (let i=0;i<resultArray.length;i++){
    console.log(resultArray[i]);
}