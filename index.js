import express from "express";

const app= express();
app.get("/",(req,res)=>
{
    res.send("hello team how are you");
});

app.listen(3000,()=>
{
    console.log("serever is running in port 3000");
});