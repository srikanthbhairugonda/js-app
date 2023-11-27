const fs=require('fs');
const contentsample="Hello world My name is srikanth";
fs.writeFile("./module/demo.txt",contentsample,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file content success");
    }
})