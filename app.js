

const express=require('express');


const app=express();

app.use('/add-product',(req,res,next)=>{
    console.log("I am in another middleware!");
    res.send('<h1>Add Product Page<h1>');
})


app.use('/',(req,res,next)=>{
    console.log("I am in another middleware!");
    res.send('<h1>Hello  From Express<h1>');
})


app.listen(3000);


// const routes=require('./routes');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);
// server.listen(3000);