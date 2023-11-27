function f(g,x,y){
    console.log("inside functioon");
    let result=g(x,y);
    return result;
}
function g(x,y){
    let z=x+y;
    return z;
}
let res=g(21,35);
console.log(res);