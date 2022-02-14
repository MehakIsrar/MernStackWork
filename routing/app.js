const express= require("express"); 
const app= express(); 

const port=3000; 

app.get('/',(req,res)=>{
res.send("Hi I am express website home page"); 
});

app.get('/about',(req,res)=>{
    res.send("Hi I am express website about page"); 
    });
    
app.get('/contactus',(req,res)=>{
    res.send("Conatact us page"); 
});
app.get('/api',(req,res)=>{
    res.send({
        id: 1, 
        name: "Mehak Israr", 
        Section:'C',
        Uni: "Comsats university"
    }); 
});
app.listen(port,()=>{
  console.log('Listening request ${port}');
});