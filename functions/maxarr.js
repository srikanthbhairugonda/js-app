function max(arr){
    let x=arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>x){
            x=arr[i];

        }
    }
    return x;
}
let result=max([25,48,65,25,50]);
console.log(result);