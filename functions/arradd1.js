function add(arr){
    let add=0;
    for(let i=0;i<arr.length;i++){
        add+=arr[i];
    }
    return add;
}
let result=add([12,51,85,20,36,]);
console.log(result);