function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        
    }
    return sum;
}
let result=sum([21,56,84,95,64]);
console.log(result);