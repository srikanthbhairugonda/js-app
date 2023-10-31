function sum(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let result=sum([20,15,32,18]);
console.log(result);