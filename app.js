const express=require("express");

const app=express();

app.use("/",(req,res)=>{

res.send("this is espress server ");

})


app.listen(8000);