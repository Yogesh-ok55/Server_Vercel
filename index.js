const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello yogesh all the best for vercel practise hello i am ayush</h1>")
})

app.listen(3000, ()=>{
    console.log("hello");
})

//hey this is main
//again trying to solve git conflict
