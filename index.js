const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send({someText:"hello"});
});

// app.listen(5000,()=>{console.log("Listening http://localhost:5000")}); when running local server

// below is when deploying a project - checking if deployment on heroku is available, if not run on 5000
const PORT=process.env.PORT||5000;

app.listen(PORT);