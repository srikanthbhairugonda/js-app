function f(fun,x,y){
  
    let result=fun(x,y);
    return result;
}
 let add=function(x,y){
   let z=x+y;
    return z;
 }
    let sub=function(x,y){
  let  sum=x-y;
    return sum;
}
let result=f(add,55,62);
console.log(result);
let result1=f(sub,32,12);
console.log(result1);