const url=require('url');
const address="https://www.youtube.com/watch?v=6tbtYflLxAY";
const part=url.parse(address,true);
console.log(part);
