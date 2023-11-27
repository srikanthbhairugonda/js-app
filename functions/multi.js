function multi(arr){
    
    for (let i=0;i<arr.length;i++){
        arr[i]*=2;
    }
    return arr;
}
let result=multi([21,34,89,64,14]);
console.log(result);