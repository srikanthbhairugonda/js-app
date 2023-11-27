const http=require('http');
const myserver=http.createServer((request,response)=>{
    response.write('welcome to node js')
    response.end()   
});
myserver.listen(8000,(err)=>{
    if(err)
    console.log(err)
else
  console.log("Your server is running");
});