const fs=require("fs");

let content="writing from file"

fs.writeFile("a.txt",content,(err)=>{

    if(err){
        console.log(err);
    }

})