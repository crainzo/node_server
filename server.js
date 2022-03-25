const http = require("http");
const fs = require("fs");


const myserver = http.createServer((request,response)=>{

       response.writeHead(200,{'Content-Type':'text/html'});

       var myurl = request.url;

       if(myurl === "/"){
           const content = fs.readFileSync("./htmlpages/register.html");
           //response.write("<h1>hello</h1>");
           response.write(content);
           

       }

       else if(myurl === "/register"){
        const content = fs.readFileSync("./htmlpages/dashboard.html");
        //response.write("<h1>hello</h1>");
        response.write(content);
        
    }

       
      

});


myserver.listen(3000);
myserver.on("connection",(result)=>{
    console.log("connection established");
})