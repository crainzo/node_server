const http = require("http");
const fs = require("fs");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(request,response)=>{

    response.sendFile(__dirname+"/htmlpages/register.html");
});

app.post("/register",(request,response)=>{
response.send(request.body);
    
})



app.listen(4000);