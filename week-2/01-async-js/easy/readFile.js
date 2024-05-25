const fs=require("fs");

fs.readFile("a.txt","utf-8",(error,data)=>{

    console.log(data);
})

let count=0;

for(let i=0;i<1000000000000;i++){

    count++;
}

console.log(count)