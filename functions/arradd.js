function add(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let result=add([12,54,62,35,25]);
console.log(result);