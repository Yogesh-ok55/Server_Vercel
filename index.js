const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello yogesh all the best for vercel practise</h1>")
})

app.listen(3000, ()=>{
    console.log("hello");
})

//hey this is main


//this is learning-branch
//understanding git stash
//learning --set--upstream
//sending changes to branch